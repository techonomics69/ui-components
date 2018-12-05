import toPairs from 'lodash/toPairs';
import React, { Component } from 'react';
import SavedColorList from './savedColorList';

// TODO: Replace this with a Redux container when the time comes.
const localStorage = window.localStorage;
const storageKey = 'savedColors';
const currentVersion = 1;
const keysAndValuesToColorObjects = (colors: ColorStore) =>
  toPairs(colors).map(([key, color]) => ({ key, color }));

export interface ColorType {
  color: string;
  key: string;
}
export interface ColorStorageProps {
  color: string;
  onChange: (color: string, event: React.ChangeEvent<any>) => void;
}

export interface ColorStore {
  [key: string]: string;
}

const upgradeSavedColorStorage = () => {
  // In case we ever need to change the way we need to store data,
  // this will give us a place to safely perform the migration. Get
  // the version of the "database" that was last stored by the user
  // to determine if a migration is needed.
  localStorage.setItem(`${storageKey}Version`, currentVersion.toString());
};

const getColorsFromLocalStorage = () => {
  if (localStorage && localStorage.getItem(storageKey)) {
    return JSON.parse(localStorage.getItem(storageKey));
  }
  return {};
};

const storeColorsInLocalStorage = (colors: ColorStore) => {
  localStorage.setItem(storageKey, JSON.stringify(colors));
};

const hasStorage = () => {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (exception) {
    return false;
  }
};
class ColorStorage extends Component<
  ColorStorageProps,
  { colors: ColorStore }
> {
  public hasLocalStorage: boolean;
  constructor(props: ColorStorageProps) {
    super(props);
    this.hasLocalStorage = hasStorage();
    // tslint:disable-next-line:no-unused-expression
    this.hasLocalStorage && upgradeSavedColorStorage();

    this.state = {
      colors: this.hasLocalStorage && getColorsFromLocalStorage(),
    };
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  public addColor(event: React.MouseEvent<HTMLElement>) {
    const { color } = this.props;
    const colors = { ...this.state.colors, [Date.now().toString()]: color };
    this.setState({ colors }, this.saveState);
  }

  public removeColor(event: React.MouseEvent<HTMLElement>, id: string) {
    const colors = { ...this.state.colors };
    delete colors[id];
    this.setState({ colors }, this.saveState);
  }

  public saveState() {
    if (this.hasLocalStorage) {
      storeColorsInLocalStorage(this.state.colors);
    }
  }

  public render() {
    const { onChange } = this.props;
    const { colors } = this.state;
    return (
      <SavedColorList
        colors={keysAndValuesToColorObjects(colors)}
        addColor={this.addColor}
        removeColor={this.removeColor}
        onChange={onChange}
      />
    );
  }
}

export default ColorStorage;

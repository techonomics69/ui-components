import capitalize from 'lodash/capitalize';
import identity from 'lodash/identity';
import isFunction from 'lodash/isFunction';
import values from 'lodash/values';
import React, { PureComponent, ReactElement } from 'react';
import Button from './button';
import ButtonList from './button-list';
import Styles from './styles/filters.module.scss';
import { TextInput } from './text-input';
import cn from './utilities/classnames';

const filterControlStyle = {
  display: 'flex',
  justifyContent: 'space-between' as 'space-between',
};

const inlineClearButtonStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'flex-end' as 'flex-end',
  paddingLeft: '20px',
};

export interface FilterableListContainerProps {
  clearButtonInHeader?: boolean;
  clearButtonLabel?: string;
  filterTypes?: Array<string>;
  items?: Array<any>;
  onClear?: (event?: any) => void;
  onChange?: (event?: any, value?: string | number) => void;
  onFilter?: (items: Array<any>, filters: {}) => Array<any>;
  renderControls: (
    filterOptions: { [key: string]: any },
    handleFilterChange?: any
  ) => ReactElement<any>;
  renderItems: (items: Array<any>) => ReactElement<any>;
  showClearButton?: boolean;
  title: string;
}

export interface FilterableListProps extends FilterableListContainerProps {
  items: Array<any>;
  className?: string;
}

export interface FilterableListState {
  [key: string]: string;
}

export class FilterableList extends PureComponent<
  FilterableListProps,
  FilterableListState
> {
  public static defaultProps = {
    clearButtonInHeader: false,
    clearButtonLabel: 'Clear',
    filterTypes: [''],
    showClearButton: false,
  };

  public static createClass(
    props: FilterableListContainerProps
  ): React.ComponentClass<any> {
    return class FilterableListContainer extends PureComponent<
      FilterableListContainerProps
    > {
      public render() {
        return <FilterableList {...props} items={this.props.items} />;
      }
    };
  }

  public state: { [key: string]: string } = {};
  public handlers: {
    [key: string]: (filterName: string, event: any) => void;
  } = {};

  constructor(props: FilterableListProps) {
    super(props);

    for (const name of props.filterTypes) {
      if (name) {
        this.state[name] = '';
        this.handlers[
          `handleFilter${capitalize(name)}Change`
        ] = this.handleFilterChange.bind(this, name);
      } else {
        this.state.value = '';
        this.handlers[`handleFilterChange`] = this.handleFilterChange.bind(
          this,
          'value'
        );
      }
    }
  }

  public handleFilterChange = (filterName: string, event: any) => {
    const value = event.target.value;
    this.setState(
      {
        [filterName]: value,
      },
      this.props.onChange
    );
  };

  public get filteredItems(): Array<any> {
    // If a function to filter items is passed in, then use that.
    const { onFilter, items } = this.props;
    if (onFilter) {
      return onFilter(items, this.state);
    }

    const filters = values(this.state)
      .join()
      .toLowerCase();
    const includesFilters = (value: string) =>
      value
        .toString()
        .toLowerCase()
        .includes(filters);

    return items.filter(
      (item: string | {}): boolean => {
        if (typeof item === 'string') {
          return includesFilters(item);
        }
        return values(item)
          .map(includesFilters)
          .some(identity);
      }
    );
  }

  public get clearButton() {
    return (
      <ButtonList style={inlineClearButtonStyle}>
        <Button small type="secondary" onClick={this.handleClear}>
          {this.props.clearButtonLabel}
        </Button>
      </ButtonList>
    );
  }

  public get showClearButtonInHeader() {
    return this.props.showClearButton && this.props.clearButtonInHeader;
  }

  public get showClearButtonInline() {
    return this.props.showClearButton && !this.props.clearButtonInHeader;
  }

  public render() {
    const {
      clearButtonInHeader,
      clearButtonLabel,
      filterTypes,
      items,
      onClear,
      onChange,
      onFilter,
      renderControls,
      renderItems,
      showClearButton,
      title,
      className,
      ...attributes
    } = this.props;

    return (
      <section className="FilterableList" {...attributes}>
        <div className={cn('filter-wrap', Styles['filter-wrap'])}>
          <div className={cn('filter-header', Styles['filter-header'])}>
            <p className={cn('filter-title', Styles['filter-title'])}>
              {title}
            </p>
            {this.showClearButtonInHeader && this.clearButton}
          </div>
          <div
            className={cn('filter-list', Styles['filter-list'])}
            style={filterControlStyle}
          >
            {renderControls(
              { ...this.state, ...this.handlers },
              this.handleFilterChange
            )}
            {this.showClearButtonInline && this.clearButton}
          </div>
        </div>
        <div className="FilterableListItems">
          {renderItems(this.filteredItems)}
        </div>
      </section>
    );
  }

  private handleClear = (event: any) => {
    if (this.props.onClear) {
      return this.props.onClear(event);
    }
    for (const key of Object.keys(this.state)) {
      this.setState({ [key]: '' });
    }
  };
}

export default FilterableList;

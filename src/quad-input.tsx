import React, { PureComponent, ReactText } from 'react';
import { TextInput } from './text-input';
import { Units } from './types/units';

import Styles from './styles/quad-input.module.scss';

export type QuadInputs = 'top' | 'right' | 'bottom' | 'left';
export type QuadInputValues = { [k in QuadInputs]: number };
export interface QuadInputProps {
  id: string;
  onChange: (e: any, values: QuadInputValues) => void;
  placeholders?: QuadInputValues;
  units: Units;
  values: QuadInputValues;
}

const inputs: Array<QuadInputs> = ['top', 'right', 'bottom', 'left'];

export class QuadInput extends PureComponent<QuadInputProps> {
  constructor(props: QuadInputProps) {
    super(props);
  }

  public render() {
    const { id, placeholders, units, values, ...attributes } = this.props;
    return (
      <div className={Styles['quad-input-wrap']}>
        {inputs.map(inputName => (
          <TextInput
            {...attributes}
            key={`quad-input-column-${inputName}`}
            id={`${id}-${inputName}`}
            type="number"
            name={inputName}
            onChange={this.handleChange}
            icon={inputName}
            placeholder={placeholders && String(placeholders[inputName])}
            units={units}
            value={values[inputName]}
          />
        ))}
      </div>
    );
  }

  private handleChange = (e: any, value: ReactText) => {
    const inputName = e.target.name;
    this.props.onChange(e, { ...this.props.values, [inputName]: value });
  };
}

export default QuadInput;

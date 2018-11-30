import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import { Checkbox } from '../src/checkbox';

const stories = storiesOf('Checkbox', module);

interface ExampleProps {
  disabled?: boolean;
  id: string;
  info?: string;
  label: string
}

class Example extends Component<ExampleProps> {
  public readonly state = { checked: false };
  public onChange = () => {
    action('Checkbox changed');
    this.setState({ checked: !this.state.checked });
  };

  public render() {
    const { disabled, id, info, label } = this.props;
    return (
      <Checkbox
        checked={this.state.checked}
        disabled={disabled}
        id={id}
        info={info}
        label={label}
        onChange={this.onChange}
      />
    );
  }
}

stories.add('Standard Checkbox', () => (
  <Example id="standard-checkbox" label="Transactional" />
));

stories.add('Disabled Checkbox', () => (
  <Example id="disabled-checkbox" disabled label="Marketing" />
));

stories.add('Checkbox with Info', () => (
  <Example id="checkbox-with-info" label="Client" info="OS" />
));

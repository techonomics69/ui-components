import React, { Component } from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import TextArea from '../src/text-area';

const stories = storiesOf('Text Area', module);

type InputChangeEventHandler = (event: React.FormEvent<any>) => void;

type RenderProp = (
  value: string,
  handleChange: InputChangeEventHandler
) => React.ReactNode;

class TextAreaContainer extends Component<{ children: RenderProp, initialValue?: string }, any> {
  public static defaultProps = { initialValue: '' };
  public state = { value: this.props.initialValue, ready: false };

  public handleChange: InputChangeEventHandler = (event: any) => {
    const target = event.target;
    this.setState({ value: target.value });
  };

  public componentDidMount() {
    // There is a really odd thing happening in storybook where it looks like without this, the text area mounts
    // before css is applied, so when it measures itself to calculate its height, the measurement is off.
    // This shouldn't be an issue in a normal situation where css loads before the page mounts.
    setTimeout(() => this.setState({ ready: true }));
  }

  public render() {
    const { children } = this.props;
    const { value, ready } = this.state;

    return ready ? children(value, this.handleChange): null;
  }
}

// The point of the long initial value is to show that the text input can mount with a long initial value
// and still have the correct height for the text supplied.
stories.add('Basic', () => (
  <TextAreaContainer initialValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
    {(value, handleChange) => (
      <TextArea
        id="textarea-basic"
        label="Label"
        value={value}
        onChange={handleChange}
      />
    )}
  </TextAreaContainer>
));

stories.add('Information Message', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-info"
        label="Label"
        value={value}
        onChange={handleChange}
        info="This is a message."
      />
    )}
  </TextAreaContainer>
));

stories.add('Required', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-required"
        label="Label"
        value={value}
        onChange={handleChange}
        required
      />
    )}
  </TextAreaContainer>
));

stories.add('Error', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-error"
        label="Label"
        value={value}
        onChange={handleChange}
        error
      />
    )}
  </TextAreaContainer>
));

stories.add('Error with Info', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-error"
        label="Label"
        value={value}
        onChange={handleChange}
        error
        info="Text input is wrong somehow."
      />
    )}
  </TextAreaContainer>
));

stories.add('Disabled', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-disabled"
        label="Label"
        value={value}
        onChange={handleChange}
        disabled
      />
    )}
  </TextAreaContainer>
));

stories.add('Scrollable', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-scrollable"
        label="Label"
        value={value}
        onChange={handleChange}
        scrollable
      />
    )}
  </TextAreaContainer>
));

stories.add('With Tooltip [skip]', () => (
  <TextAreaContainer>
    {(value, handleChange) => (
      <TextArea
        id="textarea-tooltip"
        label="Label"
        value={value}
        onChange={handleChange}
        tooltip="I am a tooltip."
      />
    )}
  </TextAreaContainer>
));

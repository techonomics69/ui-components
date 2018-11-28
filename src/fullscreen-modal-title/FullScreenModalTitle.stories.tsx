import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Button from '../button';
import FullscreenModal from '../full-screen-modal';

import FullscreenModalTitle from './index';

const stories = storiesOf('Fullscreen Modal Title', module);

class ExampleModalContainer extends Component<any, { isOpen: boolean }> {
  public readonly state = { isOpen: true };
  public open = (e: any) => {
    this.setState({ isOpen: true });
  };
  public close = (e: any) => {
    this.setState({ isOpen: false });
  };

  public render() {
    return (
      <div>
        <Button type="primary" onClick={this.open}>
          Open Modal
        </Button>
        {this.props.render({
          isOpen: this.state.isOpen,
          onClose: this.close,
        })}
      </div>
    );
  }
}

stories.add('With data and descriptors', () => (
  <FullscreenModalTitle
    title="check out this cool title"
    titleDescriptor="It has a date"
    date="Dec. 20th, 2018, 4:45 PM MST"
    dateDescriptor="The date is"
  />
));

stories.add('inside of fullscreen modal', () => (
  <ExampleModalContainer
    render={({ isOpen, onClose }: any) => (
      <FullscreenModal
        isOpen={isOpen}
        title="Fullscreen Modal"
        onClose={onClose}
      >
        <FullscreenModalTitle
          title="check out this cool title"
          titleDescriptor="It has a date"
          date="Dec. 20th, 2018, 4:45 PM MST"
          dateDescriptor="The date is"
        />
      </FullscreenModal>
    )}
  />
));

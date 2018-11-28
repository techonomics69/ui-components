import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Button from '../button';
import FullscreenModal from '../full-screen-modal';
import FullscreenModalTitle from './index';
const stories = storiesOf('Fullscreen Modal Title', module);
class ExampleModalContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = { isOpen: true };
        this.open = (e) => {
            this.setState({ isOpen: true });
        };
        this.close = (e) => {
            this.setState({ isOpen: false });
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Button, { type: "primary", onClick: this.open }, "Open Modal"),
            this.props.render({
                isOpen: this.state.isOpen,
                onClose: this.close,
            })));
    }
}
stories.add('With data and descriptors', () => (React.createElement(FullscreenModalTitle, { title: "check out this cool title", titleDescriptor: "It has a date", date: "Dec. 20th, 2018, 4:45 PM MST", dateDescriptor: "The date is" })));
stories.add('inside of fullscreen modal', () => (React.createElement(ExampleModalContainer, { render: ({ isOpen, onClose }) => (React.createElement(FullscreenModal, { isOpen: isOpen, title: "Fullscreen Modal", onClose: onClose },
        React.createElement(FullscreenModalTitle, { title: "check out this cool title", titleDescriptor: "It has a date", date: "Dec. 20th, 2018, 4:45 PM MST", dateDescriptor: "The date is" }))) })));
//# sourceMappingURL=FullScreenModalTitle.stories.js.map
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import onClickOutside from 'react-onclickoutside';
import SimpleSelect from './index';
const stories = storiesOf('Simple Select', module);
const powerups = [
    {
        label: 'Mushroom',
        style: { backgroundColor: 'red', color: 'white', fontSize: '20px' },
        value: 'mushroom',
    },
    {
        label: 'Fire flower',
        style: { backgroundColor: 'orangered', color: 'black' },
        value: 'fire-flower',
    },
    {
        label: 'Star',
        style: { backgroundColor: 'goldenrod', color: 'black' },
        value: 'star',
    },
    {
        label: 'Feather',
        style: { backgroundColor: 'burlywood', color: 'black' },
        value: 'feather',
    },
    {
        label: 'Frog',
        style: { backgroundColor: 'chartreuse', color: 'black' },
        value: 'frog',
    },
    {
        label: 'Tanooki',
        style: { backgroundColor: 'brown', color: 'black' },
        value: 'tanooki',
    },
    {
        label: '1-up',
        style: { backgroundColor: 'forestgreen', color: 'white' },
        value: '1up',
    },
];
const feels = [
    { label: 'Double plus ungood', value: 'dbl_plus-un' },
    { label: 'Good', value: 'sys_good_01' },
    { label: 'Great', value: 'sys_great_id' },
    { label: 'Grand', value: 'grand' },
    { label: 'Fantastic', value: 'fantastic' },
    { label: 'Superb', value: 'superb' },
    { label: 'Stupendous', value: 'stupendous' },
    { label: 'Extraordinary', value: 'plvs_extra' },
];
class SimpleSelectContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeOption: { label: '', value: '' },
            inputValue: '',
            isActive: false,
            isOpen: false,
        };
        this.handleClickOutside = (e) => {
            this.setState({
                isActive: false,
                isOpen: false,
            });
        };
        this.selectOption = (activeOption) => {
            this.setState({
                activeOption,
                isOpen: false,
            });
        };
        this.toggleOpen = (e) => {
            e.preventDefault();
            this.setState({
                isActive: !this.state.isActive,
                isOpen: !this.state.isOpen,
            });
        };
        this.handleInputChange = (e) => {
            e.preventDefault();
            this.setState({ inputValue: e.target.value });
        };
    }
    render() {
        return (React.createElement(Fragment, null,
            React.createElement(SimpleSelect, Object.assign({ isOpen: this.state.isOpen, onOptionSelect: this.selectOption, onToggle: this.toggleOpen, isActive: this.state.isActive, value: this.state.activeOption, options: this.props.options }, this.props)),
            this.props.withInput && (React.createElement("div", null,
                React.createElement("p", null, "Type here and then open the dropdown. You shouldn't loose focus from the textArea at any point"),
                React.createElement("textarea", { value: this.state.inputValue, onChange: this.handleInputChange })))));
    }
}
const DemoSelect = onClickOutside(SimpleSelectContainer);
stories.add('placeholder, does not steal focus', () => (React.createElement(DemoSelect, { required: true, placeholder: "Choose a thing", label: "This is required", options: feels, withInput: true })));
stories.add('Required, label', () => (React.createElement(DemoSelect, { required: true, placeholder: "Choose a thing", label: "This is required", options: feels })));
stories.add('Required, label, info', () => (React.createElement(DemoSelect, { required: true, placeholder: "Choose a thing", label: "This is required", info: "For your information, this is required", options: feels })));
stories.add('Default Value, label, info', () => (React.createElement(DemoSelect, { required: true, defaultValue: feels[3], label: "Check out this default", info: "For your information, this is required", options: feels })));
stories.add('Wacky custom option styling', () => (React.createElement(DemoSelect, { required: true, label: "This is required", info: "For your information, this is required", options: powerups })));
//# sourceMappingURL=SimpleSelect.stories.js.map
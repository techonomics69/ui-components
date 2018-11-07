import React, { Component } from 'react';
import cn from '../utilities/classnames';
import Styles from './simple-select.module.scss';
import SimpleSelectOption from './SimpleSelectOption';
class SimpleSelect extends Component {
    render() {
        const { defaultValue, disabled, error, info, isActive, isOpen, label, onToggle, options, onOptionSelect, placeholder, required, value, } = this.props;
        return (React.createElement("div", { className: cn('simple-select-wrap', Styles['simple-select-wrap'], {
                [Styles['is-disabled']]: disabled,
                'is-disabled': disabled,
                [Styles['is-error']]: error,
                'is-error': error,
                [Styles['is-required']]: required,
                'is-required': required,
            }) },
            label && (React.createElement("label", { className: cn('simple-select-label', Styles['simple-select-label']) }, label)),
            React.createElement("div", { className: cn('simple-select', Styles['simple-select']) },
                React.createElement("div", { onMouseDown: onToggle, className: cn('simple-select-control', Styles['simple-select-control'], {
                        [Styles['is-active']]: isActive,
                        'is-active': isActive,
                        [Styles['is-disabled']]: disabled,
                        'is-disabled': disabled,
                    }) }, value.label || defaultValue.label || placeholder || 'Select...'),
                isOpen && (React.createElement("div", { className: cn('simple-select-options', Styles['simple-select-options']) }, options.map((o, i) => (React.createElement(SimpleSelectOption, { key: `${i + o.value}`, data: o, onOptionSelect: onOptionSelect, selectedValue: value.value })))))),
            info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                    danger: error,
                    [Styles.danger]: error,
                    isDisabled: disabled,
                    [Styles.isDisabled]: disabled,
                }) }, info))));
    }
}
SimpleSelect.defaultProps = {
    defaultValue: { label: '', value: '' },
};
export default SimpleSelect;
export { SimpleSelect };
//# sourceMappingURL=index.js.map
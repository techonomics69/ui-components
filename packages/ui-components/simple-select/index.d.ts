/// <reference types="react" />
import React, { Component, MouseEvent } from 'react';
export interface SimpleSelectOptionData {
    label: string;
    selectedValue?: string;
    style?: React.CSSProperties;
    value: string;
}
export interface SimpleSelectProps {
    defaultValue?: SimpleSelectOptionData;
    disabled?: boolean;
    error?: boolean;
    info?: string;
    isOpen: boolean;
    isActive?: boolean;
    label?: string;
    onOptionSelect?: (value: SimpleSelectOptionData) => any;
    onToggle?: (e: MouseEvent<HTMLDivElement>) => any;
    options: Array<SimpleSelectOptionData>;
    placeholder?: string;
    required?: boolean;
    value: SimpleSelectOptionData;
}
declare class SimpleSelect extends Component<SimpleSelectProps> {
    static defaultProps: Partial<SimpleSelectProps>;
    render(): JSX.Element;
}
export default SimpleSelect;
export { SimpleSelect };

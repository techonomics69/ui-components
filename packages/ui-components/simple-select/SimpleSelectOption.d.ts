/// <reference types="react" />
import { Component } from 'react';
import { SimpleSelectOptionData, SimpleSelectProps } from './';
export declare type SimpleSelectOptionProps = Pick<SimpleSelectProps, 'onOptionSelect'> & {
    data: SimpleSelectOptionData;
    selectedValue: string;
};
export default class SimpleSelectOption extends Component<SimpleSelectOptionProps> {
    render(): JSX.Element;
    private handleClick;
}

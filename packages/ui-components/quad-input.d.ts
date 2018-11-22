/// <reference types="react" />
import { PureComponent } from 'react';
import { Units } from './types/units';
export declare type QuadInputs = 'top' | 'right' | 'bottom' | 'left';
export declare type QuadInputValues = {
    [k in QuadInputs]: number;
};
export interface QuadInputProps {
    id: string;
    onChange: (e: any, values: QuadInputValues) => void;
    placeholders?: QuadInputValues;
    units: Units;
    values: QuadInputValues;
}
export declare class QuadInput extends PureComponent<QuadInputProps> {
    constructor(props: QuadInputProps);
    render(): JSX.Element;
    private getPlaceholder(inputName);
    private handleChange;
}
export default QuadInput;

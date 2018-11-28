/// <reference types="react" />
import { Component } from 'react';
export interface FullscreenModalTitleProps {
    date?: string;
    dateDescriptor?: string;
    title: string;
    titleDescriptor?: string;
}
declare class FullscreenModalTitle extends Component<FullscreenModalTitleProps> {
    render(): JSX.Element;
}
export default FullscreenModalTitle;
export { FullscreenModalTitle };

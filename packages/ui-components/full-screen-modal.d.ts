/// <reference types="react" />
import React, { Component } from 'react';
import { ModalProps } from './utilities/modals';
export interface FullScreenModelProps extends ModalProps {
    children?: React.ReactNode;
    className?: string;
    hasPadding?: boolean;
    isOpen?: boolean;
    onClose?: (event: any) => void;
    modalContainer?: Element;
    renderHeaderActions?: () => React.ReactNode;
    headerTabs?: React.ReactNode;
    title: string;
    tooltipText?: string;
}
export declare class FullscreenModal extends Component<FullScreenModelProps> {
    static defaultProps: Partial<FullScreenModelProps>;
    componentDidUpdate(prevProps: FullScreenModelProps): void;
    render(): React.ReactPortal;
}
export default FullscreenModal;

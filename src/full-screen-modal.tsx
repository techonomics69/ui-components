import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import FlexHeader from './flexHeader';
import { Icon } from './icon';

import cn from './utilities/classnames';
import { ModalProps, modalWillReceiveProps } from './utilities/modals';

import Styles from './styles/fullscreen-modal.module.scss';
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

export class FullscreenModal extends Component<FullScreenModelProps> {
  public static defaultProps: Partial<FullScreenModelProps> = {
    bodyNode: document.body,
    hasPadding: true,
    modalContainer: document.body,
    onClose: () => {},
  };

  public componentDidUpdate(prevProps: FullScreenModelProps) {
    modalWillReceiveProps(this.props, prevProps);
  }

  public render() {
    const {
      bodyNode,
      children,
      className,
      hasPadding,
      isOpen,
      modalContainer,
      onClose,
      renderHeaderActions,
      headerTabs,
      title,
      tooltipText,
      ...attributes
    } = this.props;

    const headerActions = renderHeaderActions && renderHeaderActions();

    return ReactDOM.createPortal(
      <div
        className={cn(
          'modal-fullscreen',
          Styles['modal-fullscreen'],
          { [Styles['is-open']]: isOpen },
          className
        )}
        {...attributes}
      >
        <FlexHeader
          headerActions={headerActions}
          headerTabs={headerTabs}
          onClose={onClose}
          title={title}
          tooltipText={tooltipText}
        />
        <div className={cn('modal-content', { 'has-padding': hasPadding })}>
          {children}
        </div>
      </div>,
      modalContainer
    );
  }
}

export default FullscreenModal;

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';
import { ButtonList } from './button-list';
import Counter from './counter';
import { Icon } from './icon';

import Styles from './styles/flex-header.module.scss';
import cn from './utilities/classnames';

export interface FlexHeaderProps {
  className?: string;
  creditsCount?: string;
  renderActions?: () => React.ReactNode;
  renderTabs?: () => React.ReactNode;
  title: string;
  tooltipText?: string;
  onClose?: (event: any) => void;
}

export class FlexHeader extends Component<FlexHeaderProps> {
  public render() {
    const {
      className,
      creditsCount,
      onClose,
      renderActions,
      renderTabs,
      title,
      tooltipText,
      ...attributes
    } = this.props;

    return (
      <header className={Styles['flex-header']}>
        <div>
          {onClose && (
            <a className={Styles['flex-header-action']} onClick={onClose}>
              <Icon type="x" />
            </a>
          )}
          <div className={Styles['flex-header-title']}>
            <h3>
              {title}
              {tooltipText && (
                <span data-tooltip={tooltipText} data-tooltip-pos="down">
                  <Icon type="info-circle" />
                </span>
              )}
            </h3>
          </div>
          {renderTabs && renderTabs()}
        </div>
        <div className={Styles['flex-header-right']}>
          {typeof creditsCount !== 'undefined' ? (
            <Counter text="Credits" count={creditsCount} />
          ) : (
            ''
          )}
          {renderActions && renderActions()}
        </div>
      </header>
    );
  }
}

export default FlexHeader;

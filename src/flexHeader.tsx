import React, { Component, Fragment, PureComponent, SFC } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';
import { ButtonList } from './button-list';
import Counter from './counter';
import { Icon } from './icon';

import Styles from './styles/flex-header.module.scss';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export interface FlexHeaderProps {
  className?: string;
  creditsCount?: string;
  headerActions?: React.ReactNode;
  headerTabs?: React.ReactNode;
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
      headerActions,
      headerTabs,
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
          {headerTabs}
        </div>
        <div className={Styles['flex-header-right']}>
          {typeof creditsCount !== 'undefined' ? (
            <Counter text="Credits" count={creditsCount} />
          ) : (
            ''
          )}
          {headerActions}
        </div>
      </header>
    );
  }
}

export default FlexHeader;

export const FlexHeaderTabs: React.SFC<{}> = props => {
  return <div className={Styles['flex-header-tabs']}>{props.children}</div>;
};

export interface FlexHeaderTabProps {
  iconType?: IconType;
  isActive?: boolean;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export const FlexHeaderTab: React.SFC<FlexHeaderTabProps> = props => {
  return (
    <div
      onClick={props.onClick}
      className={cn(Styles['flex-header-tab'], {
        [Styles['is-active']]: !!props.isActive,
      })}
    >
      {props.iconType && <Icon type={props.iconType} />}
      {props.text}
    </div>
  );
};

import React from 'react';
import Icon from './icon';
import Styles from './styles/tables.module.scss';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

const evaluateRenderProp: (
  prop: IconType | (() => React.ReactNode),
) => React.ReactNode = (prop) => {
  if (typeof prop === 'function') {
    return prop();
  } else {
    return <Icon type={prop} />;
  }
};

export interface EmptyStateProps {
  children?: string | React.ReactElement<any> | Array<React.ReactElement<any>>;
  icon?: IconType | (() => React.ReactNode);
  buttons?: Array<React.ReactElement<any>>;
  header?: string;
}

export const EmptyState: React.SFC<EmptyStateProps> = ({
  children,
  icon,
  buttons,
  header,
}) => (
  <div className={`${Styles['table-state']} ${Styles['is-empty']}`}>
    {icon && evaluateRenderProp(icon)}
    {header && <h2>{header}</h2>}
    {children}
  </div>
);

export default EmptyState;

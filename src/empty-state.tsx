import React from 'react';
import Icon from './icon';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

const evaluateRenderProp: (
  prop: IconType | (() => React.ReactNode)
) => React.ReactNode = prop => {
  if (typeof prop === 'function') {
    return prop();
  } else {
    return <Icon type={prop} />;
  }
};

export interface EmptyStateProps {
  children?: React.ReactNode;
  icon?: IconType | (() => React.ReactNode);
  buttons?: React.ReactNode;
  header?: string;
  className?: string;
}

export const EmptyState: React.SFC<EmptyStateProps> = ({
  children,
  icon,
  buttons,
  header,
  className,
  ...attributes
}) => (
  <div className={cn('table-state', 'is-empty', className)} {...attributes}>
    {icon && evaluateRenderProp(icon)}
    {header && <h2>{header}</h2>}
    {children}
  </div>
);

export default EmptyState;

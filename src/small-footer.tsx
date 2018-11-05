import React from 'react';
import cn from './utilities/classnames';

import Icon from './icon';
import { IconType } from './types/icons';

export interface FooterProps {
  children?: React.ReactNode;
  icon?: IconType;
  header?: string;
  className?: string;
}

export const Footer: React.SFC<FooterProps> = ({
  children,
  icon,
  header,
  className,
  ...attributes
}) => (
  <p className={cn('small', 'is-center', className)} {...attributes}>
    {icon && (
      <span>
        <Icon type={icon} />{' '}
      </span>
    )}
    {header && <strong>{`${header} `}</strong>}
    {children}
  </p>
);

export default Footer;

import React from 'react';

import cn from './utilities/classnames';

import Badge from './badge';
import Icon from './icon';
import Styles from './styles/card.module.scss';
import { color as ValidColor } from './types/color';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';

export interface CardProps {
  children?: React.ReactNode;
  centered?: boolean;
  thin?: boolean;
  inline?: boolean;
  title?: string;
  body?: string;
  className?: string;
  badge?:
    | {
        content: string;
        color: ValidColor;
      }
    | React.ReactNode;
  icon?: IconType;
  iconSize?: IconSizeType;
  selected?: boolean;
  module?: boolean;
}

export const Card: React.SFC<CardProps> = ({
  badge,
  body,
  centered,
  children,
  icon,
  iconSize,
  inline,
  thin,
  title,
  className,
  selected,
  module = false,
  ...attributes
}) => {
  return (
    <div
      className={cn('card', Styles.card, className, {
        [Styles['is-centered']]: centered,
        'is-centered': centered,
        [Styles['is-inline']]: inline,
        'is-inline': inline,
        [Styles['is-module']]: module,
        'is-module': module,
        [Styles['is-selected']]: selected,
        'is-selected': selected,
        [Styles['is-thin']]: thin,
        'is-thin': thin,
      })}
      {...attributes}
    >
      {badge && <Badge {...badge} />}
      {icon && (
        <div className={cn('card-icon', Styles['card-icon'])}>
          <Icon size={iconSize} type={icon} />
        </div>
      )}
      {title && (
        <h2
          className={cn({
            'card-title': inline,
            [Styles['card-title']]: inline,
          })}
        >
          {title}
        </h2>
      )}
      {body && <p>{body}</p>}
      {children}
    </div>
  );
};

export default Card;

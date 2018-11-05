import React, { HTMLAttributes } from 'react';
import { ButtonProps } from './button';
import Styles from './styles/button.module.scss';
import cn from './utilities/classnames';

export interface ButtonListProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onDark?: boolean;
  className?: string;
}

const { map } = React.Children;

export const ButtonList: React.SFC<ButtonListProps> = ({
  children,
  onDark,
  className,
  ...attributes
}) => {
  return (
    <div
      className={cn('btn-list', Styles['btn-list'], className)}
      {...attributes}
    >
      {map(children, (button?: React.ReactElement<any>) => {
        return button && React.cloneElement(button, { onDark });
      })}
    </div>
  );
};

ButtonList.defaultProps = {
  onDark: false,
};

export default ButtonList;

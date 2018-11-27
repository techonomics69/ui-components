import React, { InputHTMLAttributes } from 'react';
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import Styles from './styles/button.module.scss';
import { IconType } from './types/icons';
import cn from './utilities/classnames';
import withNativeProps from './withNativeProps';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'group-item';

export interface AllButtonProps {
  disabled?: boolean;
  loading?: boolean;
  badge?: number | string;
  small?: boolean;
  onDark?: boolean;
  type?: ButtonType;
  onClick?: (event: any) => void;
  group?: boolean;
  active?: boolean;
  icon?: IconType;
  id?: string;
  isLink?: boolean;
  className?: string;
}

export interface ButtonProps extends AllButtonProps {
  children?: string | React.ReactNode;
  isSubmit?: boolean;
  isReset?: boolean;
}

export interface ButtonizedProps extends AllButtonProps {
  children?: React.ReactElement<ButtonProps>;
}

export const Button: React.SFC<
  ButtonProps &
    React.HTMLAttributes<HTMLButtonElement> &
    React.InputHTMLAttributes<HTMLButtonElement>
> = props => {
  let btnType = 'button';
  if (props.isSubmit) {
    btnType = 'submit';
  } else if (props.isReset) {
    btnType = 'reset';
  }
  return (
    <Buttonized {...props}>
      <button type={btnType} disabled={props.disabled}>
        {props.children}
      </button>
    </Buttonized>
  );
};

export const Buttonized: React.SFC<ButtonizedProps> = ({
  children,
  type,
  badge,
  disabled,
  loading,
  small,
  onDark,
  onClick,
  group,
  active,
  icon,
  id,
  className,
  ...attributes
}) => {
  const hasBadge: boolean = !!badge || badge === 0;
  const hasIcon: boolean = !!icon;
  const content: Array<any> = [];

  if (hasBadge) {
    content.push(<Badge key={1}>{badge}</Badge>);
  }

  if (hasIcon) {
    content.push(<Icon key={2} type={icon} />);
  }

  if (loading) {
    content.push(<Loader key={3} small onDark={type === 'primary'} />);
  }

  // the children of the element being buttonized
  if (children.props.children) {
    content.push(children.props.children);
  }

  return React.cloneElement(
    children,
    {
      className: cn(
        'btn',
        `btn-${type}`,
        Styles.btn,
        Styles[`btn-${type}`],
        className,
        {
          [Styles['btn-on-dark']]: onDark,
          'btn-on-dark': onDark,
          [Styles['btn-small']]: small,
          'btn-small': small,
          [Styles['has-badge']]: hasBadge,
          'has-badge': hasBadge,
          [Styles['has-icon']]: hasIcon || loading,
          'has-icon': hasIcon || loading,
          [Styles['is-active']]: active,
          'is-active': active,
          [Styles['is-disabled']]: disabled,
          'is-disabled': disabled,
          [Styles['is-loading']]: loading,
          'is-loading': loading,
        }
      ),
      id,
      onClick,
      ...attributes,
    },
    content
  );
};

Button.defaultProps = {
  active: false,
  badge: null,
  children: '',
  disabled: false,
  group: false,
  icon: null,
  loading: false,
  onClick: () => {},
  onDark: false,
  small: false,
  type: 'primary',
};

export default withNativeProps(Button);

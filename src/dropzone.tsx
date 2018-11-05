import { FlexWrapProperty } from 'csstype';
import React from 'react';
import Alert from './alert';
import { AlertProps } from './alert';
import Styles from './styles/dropzone.module.scss';
import cn from './utilities/classnames';

export interface DropzoneProps {
  active?: boolean;
  alert?: React.ReactElement<AlertProps>;
  children?: React.ReactNode;
  className?: string;
  hovered?: boolean;
  invalid?: boolean;
  large?: boolean;
  onDragEnd?: (event: any) => void;
  onDragLeave?: (event: any) => void;
  onDragOver?: (event: any) => void;
  onDrop?: (event: any) => void;
}

const dropzoneStyle = {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap' as FlexWrapProperty,
  fontSize: '14px',
  justifyContent: 'center',
};

// If we show an alert, the dropzone children needs a special css rule to display properly
const dropzoneChildrenStyle = (
  style: React.CSSProperties,
  alert?: React.ReactElement<AlertProps>
) => {
  if (!!alert) {
    return { ...style, alignSelf: 'flex-end' };
  }
  return style;
};

export const Dropzone: React.SFC<DropzoneProps> = ({
  active,
  alert,
  hovered,
  invalid,
  large,
  children,
  className,
  onDragOver,
  onDragLeave,
  onDragEnd,
  onDrop,
  ...attributes
}) => {
  return (
    <section
      className={cn('dropzone', Styles.dropzone, className, {
        [Styles['has-inline-alert']]: !!alert,
        'has-inline-alert': !!alert,
        [Styles['is-active']]: active,
        'is-active': active,
        [Styles['is-hovered']]: hovered,
        'is-hovered': hovered,
        [Styles['is-invalid']]: invalid,
        'is-invalid': invalid,
        [Styles['is-large']]: large,
        'is-large': large,
      })}
      role="hidden"
      style={dropzoneStyle}
      {...attributes}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
    >
      <div style={dropzoneChildrenStyle({}, alert)}>{children}</div>
      {alert &&
        React.cloneElement(alert, {
          ...alert.props,
          inline: true,
        })}
    </section>
  );
};

Dropzone.defaultProps = {
  active: false,
  hovered: false,
  invalid: false,
  large: false,
};

export default Dropzone;

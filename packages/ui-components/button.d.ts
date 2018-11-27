/// <reference types="react" />
import React from 'react';
import { IconType } from './types/icons';
export declare type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'group-item';
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
export declare const Button: React.SFC<ButtonProps & React.HTMLAttributes<HTMLButtonElement> & React.InputHTMLAttributes<HTMLButtonElement>>;
export declare const Buttonized: React.SFC<ButtonizedProps>;
declare const _default: (props: any) => JSX.Element;
export default _default;

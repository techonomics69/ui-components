/// <reference types="react" />
import React from 'react';
import { IconType } from '../types/icons';
export declare type ButtonType = 'primary' | 'secondary' | 'danger' | 'group-item';
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
}
export interface ButtonProps extends AllButtonProps {
    children?: string | React.ReactNode;
}
export interface ButtonizedProps extends AllButtonProps {
    children?: React.ReactElement<ButtonProps>;
}
export declare const Button: React.SFC<ButtonProps>;
export declare const Buttonized: React.SFC<ButtonizedProps>;
export default Button;

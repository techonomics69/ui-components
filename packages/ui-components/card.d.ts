/// <reference types="react" />
import React from 'react';
import { color as ValidColor } from './types/color';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';
export interface CardProps {
    children?: React.ReactNode;
    centered?: boolean;
    thin?: boolean;
    inline?: boolean;
    title?: React.ReactNode;
    body?: string;
    className?: string;
    badge?: {
        content: string;
        color: ValidColor;
    } | React.ReactElement<any>;
    icon?: IconType;
    iconSize?: IconSizeType;
    selected?: boolean;
    module?: boolean;
}
export declare const Card: React.SFC<CardProps>;
export default Card;

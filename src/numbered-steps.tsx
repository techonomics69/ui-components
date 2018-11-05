import React from 'react';
import Styles from './styles/numbered-steps.module.scss';
import cn from './utilities/classnames';

export interface NumberedStepProps {
  children: React.ReactNode;
  header: string;
}

export const NumberedStep: React.SFC<NumberedStepProps> = ({
  children,
  header,
  ...attributes
}) => (
  <li {...attributes}>
    <h3>{header}</h3>
    {children}
  </li>
);

export interface NumberedStepsProps {
  children:
    | React.ReactElement<NumberedStepProps>
    | Array<React.ReactElement<NumberedStepProps>>;
  className?: string;
  attributes: Array<any>;
}

export const NumberedSteps: React.SFC<NumberedStepsProps> = ({
  children,
  className,
  ...attributes
}) => (
  <ol className={cn('numbered-steps', Styles['numbered-steps'], className)}>
    {children}
  </ol>
);

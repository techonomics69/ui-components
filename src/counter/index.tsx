import React from 'react';
import cn from '../utilities/classnames';
import Styles from './counter.module.scss';

export interface CounterProps {
  className?: string;
  count: string;
  text: string;
}

export const Counter: React.SFC<CounterProps> = ({
  className,
  text,
  count,
  ...attributes
}) => (
  <div
    className={cn('counter', Styles.counter, className, Styles[`counter`])}
    {...attributes}
  >
    {text}
    <span className={cn('counter-bubble', Styles[`counter-bubble`])}>
      {count}
    </span>
  </div>
);

Counter.defaultProps = {
  className: '',
  count: '',
  text: '',
};

export default Counter;

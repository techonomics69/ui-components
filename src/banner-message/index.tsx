import React, { Component } from 'react';
import cn from '../utilities/classnames';
import Styles from './banner-message.module.scss';

export interface BannerMessageProps {
  className?: string;
  type: 'beta' | 'info' | 'warning';
}

export const BannerMessage: React.SFC<BannerMessageProps> = ({
  className,
  type,
  children,
}) => (
  <div
    className={cn(
      Styles['banner-message'],
      className,
      Styles[`banner-message-${type}`]
    )}
  >
    {children}
  </div>
);

const DeprecatedBannerMessage: React.SFC<BannerMessageProps> = ({
  className,
  type,
  children,
}) => {
  const deprecationMessage1 =
    'WARNING: This export is being deprecated. Please update to use the following export:';
  const deprecationMessage2 =
    "import { BannerMessage } from '@sendgrid/ui-components';";
  // tslint:disable-next-line: no-console
  console.warn(deprecationMessage1);
  // tslint:disable-next-line: no-console
  console.warn(deprecationMessage2);
  return (
    <div
      className={cn(
        Styles['banner-message'],
        className,
        Styles[`banner-message-${type}`]
      )}
    >
      {children}
    </div>
  );
};

export default DeprecatedBannerMessage;

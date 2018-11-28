import React, { Component } from 'react';

import Styles from './full-screen-modal-title.module.scss';

export interface FullscreenModalTitleProps {
  date?: string;
  dateDescriptor?: string;
  title: string;
  titleDescriptor?: string;
}

class FullscreenModalTitle extends Component<FullscreenModalTitleProps> {
  public render() {
    const { date, dateDescriptor, title, titleDescriptor } = this.props;

    return (
      <div className={Styles.titleContainer}>
        <h1>{title}</h1>
        <div className={Styles.testInfo}>
          <p className="small">
            <strong>{titleDescriptor}</strong>
          </p>

          <p className="small">
            {dateDescriptor} {date}
          </p>
        </div>
      </div>
    );
  }
}

export default FullscreenModalTitle;
export { FullscreenModalTitle };

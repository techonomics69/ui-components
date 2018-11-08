import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import Counter from './index';

const stories = storiesOf('Counter', module);

stories.add('Counter', () => (
  <Fragment>
    <Counter text="Credits" count="1000" />
  </Fragment>
));

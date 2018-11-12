import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import Counter from './index';
const stories = storiesOf('Counter', module);
stories.add('Counter', () => (React.createElement(Fragment, null,
    React.createElement(Counter, { text: "Credits", count: "1000" }))));
//# sourceMappingURL=counter.stories.js.map
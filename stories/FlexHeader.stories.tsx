import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../src/button';
import ButtonList from '../src/button-list';
import FlexHeader, { FlexHeaderTab, FlexHeaderTabs } from '../src/flexHeader';
import { Icon } from '../src/icon';
import cn from '../src/utilities/classnames';

const loaderStories = storiesOf('Flex Header', module);

const renderActions = () => {
  return (
    <ButtonList>
      <Button type="tertiary">
        Cancel
      </Button>
      <Button className="btn btn-primary">
        Update
      </Button>
    </ButtonList>
  );
}

const renderTabs = (num?: number, secondActive?: boolean) => {
  return (
    <FlexHeaderTabs>
      <FlexHeaderTab text="Run New Test" iconType="mail" isActive={!secondActive} />
      { 
        num > 1 && <FlexHeaderTab text="View Test Results" iconType="mail" isActive={!!secondActive} />
      }
    </FlexHeaderTabs>
  );
}

const buyCredits = () => {
  return (
    <ButtonList>
      <Button type="tertiary">
        Buy Credits
      </Button>
    </ButtonList>
  );
}

const edit = () => {
  return (
    <ButtonList>
      <Button type="primary" onDark>
        Edit
      </Button>
    </ButtonList>
  );
}


loaderStories.add('KANPE', () =>
  <FlexHeader title="Title Goes Here" onClose={()=>{}} creditsCount="26" renderTabs={renderTabs.bind(this, 2)} renderActions={buyCredits} />);

loaderStories.add('KANPE - Second Tab Active', () => 
  <FlexHeader title="Title Goes Here" onClose={()=>{}} creditsCount="26" renderTabs={renderTabs.bind(this, 2, true)} renderActions={buyCredits} />);

loaderStories.add('KANPE - No Credits', () =>
  <FlexHeader title="Title Goes Here" onClose={()=>{}} renderTabs={renderTabs.bind(this, 2)} />);

loaderStories.add('KANPE - Only one Tab. No secondary', () =>
  <FlexHeader title="Title Goes Here" onClose={()=>{}} renderTabs={renderTabs.bind(this, 1)} creditsCount="26" />);

loaderStories.add('Image Library', () =>
  <FlexHeader title="Image Library" onClose={()=>{}} />);

loaderStories.add('Email Preview', () =>
  <FlexHeader title="Title Goes Here" onClose={()=>{}} renderActions={edit} />);

loaderStories.add('Edit Code', () =>
  <FlexHeader title="Email Code Module" onClose={()=>{}} tooltipText="sup" renderActions={renderActions} />);

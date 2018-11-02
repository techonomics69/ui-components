import { storiesOf } from '@storybook/react';
import React from 'react';
import ReactSelect, { components } from 'react-select';
import Select, { Createable } from '.';
import './select.module.scss';

const stories = storiesOf('Select', module);

const feels = [
  { label: 'Double plus ungood', value: 'dbl_plus-un' },
  { label: 'Good', value: 'sys_good_01' },
  { label: 'Great', value: 'sys_great_id' },
  { label: 'Grand', value: 'grand' },
  { label: 'Fantastic', value: 'fantastic' },
  { label: 'Superb', value: 'superb' },
  { label: 'Stupendous', value: 'stupendous' },
  { label: 'Extraordinary', value: 'plvs_extra' },
];

const powerups = [
  { label: 'Mushroom', value: 'mushroom' },
  { label: 'Fire flower', value: 'fire-flower' },
  { label: 'Star', value: 'star' },
  { label: 'Feather', value: 'feather' },
  { label: 'Frog', value: 'frog' },
  { label: 'Tanooki', value: 'tanooki' },
  { label: '1-up', value: '1up' },
];

stories.add('Standard', () => (
  <div className="input-select-wrap">
    <Select defaultValue={feels[1]} name="single" options={feels} />
  </div>
));

stories.add('Standard open', () => (
  <div className="input-select-wrap">
    <Select options={feels} placeholder="Goobers" menuIsOpen />
  </div>
));

stories.add('With placeholder', () => (
  <div className="input-select-wrap">
    <Select options={feels} placeholder="Goobers" />
  </div>
));

stories.add('With tooltip', () => (
  <div className="input-select-wrap">
    <Select
      options={feels}
      placeholder="Goobers"
      tooltip="Great stuff!"
      tooltipDirection="left"
    />
  </div>
));

stories.add('Disabled', () => (
  <div className="input-select-wrap is-disabled">
    <Select defaultValue={feels[7]} disabled options={feels} />
  </div>
));

stories.add('Searchable', () => (
  <div className="input-select-wrap">
    <Select defaultValue={feels[1]} isSearchable options={feels} />
  </div>
));

stories.add('Multi select - no values', () => (
  <div className="input-select-wrap">
    <Select isSearchable isMulti options={powerups} />
  </div>
));

stories.add('Multi select', () => (
  <div className="input-select-wrap">
    <Select
      defaultValue={[powerups[0], powerups[1]]}
      isSearchable
      isMulti
      options={powerups}
    />
  </div>
));

stories.add('Multi select - open', () => (
  <div className="input-select-wrap">
    <Select
      defaultValue={[powerups[0], powerups[1]]}
      isSearchable
      isMulti
      menuIsOpen
      options={powerups}
    />
  </div>
));

stories.add('Tagging', () => (
  <div className="input-select-wrap">
    <Createable
      isMulti
      options={powerups}
      value={[powerups[0], powerups[1], { label: 'row', value: 'row' }]}
    />
  </div>
));

stories.add('Tagging - open', () => (
  <div className="input-select-wrap">
    <Createable
      isMulti
      options={powerups}
      value={[powerups[0], powerups[1], { label: 'row', value: 'row' }]}
      menuIsOpen
    />
  </div>
));

stories.add('Tagging - tooltip', () => (
  <div className="input-select-wrap">
    <Createable
      isMulti
      options={powerups}
      value={[powerups[0], powerups[1], { label: 'row', value: 'row' }]}
      tooltip="Much Power"
      tooltipDirection="down"
    />
  </div>
));

stories.add('Option groups', () => (
  <div className="input-select-wrap">
    <Select
      name="groups"
      placeholder="Feels vs. Powerups"
      options={[
        { label: 'Feels', options: feels },
        { label: 'Powerups', options: powerups },
      ]}
    />
  </div>
));

stories.add('Option groups - open', () => (
  <div className="input-select-wrap">
    <Select
      name="groups"
      placeholder="Feels vs. Powerups"
      menuIsOpen
      options={[
        { label: 'Feels', options: feels },
        { label: 'Powerups', options: powerups },
      ]}
    />
  </div>
));

// This is just to illustrate 2 diff ways to add custom styles.
// the styles={customStyles} way is strongly preferred.
stories.add('Custom classnames and styles', () => {
  const Control = (props: any) => (
    <div className="my-control-wrapper">
      <p>My amazing select!</p>
      <components.Control {...props} />
    </div>
  );

  // this is the preferred way to style react-select
  const customStyles = {
    option: (base: any) => ({
      ...base,
      borderBottom: '1px dotted pink',
      cursor: 'pointer',
    }),
  };

  return (
    <div>
      {/* i know this looks weird, but this is just to illustrate styling by classnames */}
      <style>
        {`
        .my-control-wrapper {
          background: #927;
          color: #eee;
          padding: 1em;
        }
      `}f
      </style>
      <ReactSelect
        components={{ Control }}
        options={powerups}
        styles={customStyles}
      />
    </div>
  );
});

const labelStories = storiesOf('Select/Label + Info', module);

labelStories.add('error', () => (
  <React.Fragment>
    <Select label={'Powerups'} options={powerups} error info={`it's a trap`} />
  </React.Fragment>
));
labelStories.add('disabled', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      options={powerups}
      disabled
      info={`it's a trap`}
    />
  </React.Fragment>
));
labelStories.add('disabled - defaultValue', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      defaultValue={powerups[0]}
      options={powerups}
      disabled
      info={`it's a trap`}
    />
  </React.Fragment>
));
labelStories.add('disabled - defaultValue - multi select', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      defaultValue={powerups[0]}
      options={powerups}
      disabled
      isMulti
      info={`it's a trap`}
    />
  </React.Fragment>
));
labelStories.add('disabled + error', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      options={powerups}
      disabled
      error
      info={`it's a trap`}
    />
  </React.Fragment>
));

labelStories.add('label', () => (
  <React.Fragment>
    <Select label={'Powerups'} options={powerups} disabled />
  </React.Fragment>
));
labelStories.add('label - required', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      options={powerups}
      required
      info={`it's a trap`}
    />
  </React.Fragment>
));

labelStories.add('info', () => (
  <Select
    options={powerups}
    info={'Read this to better understand the dropdown.'}
  />
));

import { action, decorateAction } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment, RefObject } from 'react';

import { timingSafeEqual } from 'crypto';
import Alert from '../src/alert';
import Button from '../src/button';
import { Radio, RadioGroup } from '../src/radio';
import { SegmentTerm, SegmentWrapper } from '../src/segment-term/';
import Select from '../src/select';

const stories = storiesOf('Segment Term', module);
const onAddButtonClick = action('add button click');
const onDeleteClick = action('delete click');
const onConfirmClick = action('confirm click');
const onEditClick = action('edit click');

stories.add('Segment terms', () => (
  <div>
    <SegmentWrapper>
      {(editing: boolean, editClick: () => void) => (
        <SegmentTerm
          title="Entry Criteria"
          hasSeparator
          label="The first time a contact is added to"
          queryName="People in Los Angeles"
          editable
          editing={editing}
          onEdit={editClick}
          onDelete={editClick}
          renderInputs={() => (
            <Fragment>
              <div className="input-select-wrap">
                <label className="input-select-label" htmlFor="select-a">
                  Select send conditions
                </label>
                <Select
                  id="select-a"
                  options={[{ label: 'The first time a contact', value: '1' }]}
                  defaultValue={{ label: 'The first time a contact', value: '1' }}
                />
              </div>
              <div className="input-select-wrap">
                <label className="input-select-label" htmlFor="select-b">
                  Select contact criteria
                </label>
                <Select
                  id="select-b"
                  options={[{ label: 'Abandons a cart', value: '1' }]}
                  defaultValue={{ label: 'Abandons a cart', value: '1' }}
                />
              </div>
            </Fragment>
          )}
        />
      )}
    </SegmentWrapper>

    <SegmentWrapper
      onSubmit={() => {
        return false;
      }}
    >
      {(editing: boolean, editClick: () => void) => (
        <SegmentTerm
          title="Or"
          label="Every time a contact is added to"
          queryName="People in Denver"
          editable
          editing={editing}
          onEdit={editClick}
          onDelete={editClick}
          renderInputs={() => (
            <Fragment>
              <div className="input-select-wrap">
                <label className="input-select-label" htmlFor="select-a">
                  Select send conditions
                </label>
                <Select
                  id="select-a"
                  options={[{ label: 'The first time a contact', value: '1' }]}
                  defaultValue={{ label: 'The first time a contact', value: '1' }}
                />
              </div>
              <div className="input-select-wrap">
                <label className="input-select-label" htmlFor="select-b">
                  Select contact criteria
                </label>
                <Select
                  id="select-b"
                  options={[{ label: 'Abandons a cart', value: '1' }]}
                  error={true}
                />
              </div>
            </Fragment>
          )}
        />
      )}
    </SegmentWrapper>
    <SegmentWrapper editing={true}>
      {(editing: boolean, editClick: () => void) => (
        <SegmentTerm
          title="Entry Criteria"
          hasSeparator
          label="The first time a contact is added to"
          queryName="People in Los Angeles"
          editable
          editing={editing}
          hasAddButton
          onAddButtonClick={onAddButtonClick}
          onEdit={editClick}
          onDelete={editClick}
          renderInputs={() => (
            <Fragment>
              <div className="input-select-wrap">
                <label className="input-select-label" htmlFor="select-a">
                  Select send conditions
                </label>
                <Select
                  id="select-a"
                  options={[{ label: 'The first time a contact', value: '1' }]}
                  defaultValue={{ label: 'The first time a contact', value: '1' }}
                />
              </div>
              <div className="input-select-wrap">
                <label className="input-select-label" htmlFor="select-b">
                  Select contact criteria
                </label>
                <Select
                  id="select-b"
                  options={[{ label: 'Abandons a cart', value: '1' }]}
                  defaultValue={{ label: 'Abandons a cart', value: '1' }}
                />
              </div>
            </Fragment>
          )}
        />
      )}
    </SegmentWrapper>
  </div>
));

stories.add('Segment term which cannot be edited', () => (
  <SegmentTerm
    title="Entry Criteria"
    label="The first time a contact is added to"
    queryName="People in Los Angeles"
    editable={false}
  />
));

stories.add('Segment term which is being edited', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasAddButton
    hasSeparator
    editable
    editing
    onAddButtonClick={onAddButtonClick}
    onDelete={onDeleteClick}
    onConfirm={onConfirmClick}
    renderInputs={() => (
      <Fragment>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-a">
            Select send conditions
          </label>
          <Select
            id="select-a"
            options={[{ label: 'The first time a contact', value: '1' }]}
          />
        </div>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-b">
            Select contact criteria
          </label>
          <Select id="select-b" options={[{ label: 'Abandons a cart', value: '1' }]} />
        </div>
      </Fragment>
    )}
  />
));

stories.add('Segment term which is being edited and is filled out', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasAddButton
    hasSeparator
    editable
    editing
    showConfirm
    onAddButtonClick={onAddButtonClick}
    onDelete={onDeleteClick}
    onConfirm={onConfirmClick}
    renderInputs={() => (
      <Fragment>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-a">
            Select send conditions
          </label>
          <Select
            id="select-a"
            options={[{ label: 'the first time a contact', value: '1' }]}
            defaultValue={{ label: 'the first time a contact', value: '1' }}
          />
        </div>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="select-b">
            Select contact criteria
          </label>
          <Select id="select-b" options={[{ label: 'Abandons a cart', value: '1' }]} />
        </div>
        <div className="input-select-wrap">
          <Select
            id="select-c"
            options={[{ label: 'People in Los Angeles', value: '1' }]}
          />
        </div>
      </Fragment>
    )}
  />
));

stories.add('Segment term with alert', () => (
  <SegmentTerm
    title="Entry Criteria"
    hasSeparator
    label="The first time a contact is added to"
    queryName="People in Los Angeles"
    editable
    onEdit={onEditClick}
    renderAlert={() => (
      <Alert type="warning" dismissable={false}>
        Changes you've made to your entry criteria have not been applied to your
        live automation.
        <Button type="primary">Save and Apply</Button>
      </Alert>
    )}
  />
));

stories.add('Segment term with radio btns and alert', () => (
  <SegmentTerm
    title="Exit Criteria"
    editable
    editing
    radios
    renderInputs={() => (
      <RadioGroup name="example-grp" onChange={action('radio change')}>
        <Radio checked value="a" label="Option 1" />
        <Radio checked value="b" label="Option 2" />
      </RadioGroup>
    )}
    renderAlert={() => (
      <Alert type="warning" dismissable={false}>
        Changes you've made to your exit criteria have not been applied to your
        live automation.
        <Button type="primary">Save and Apply</Button>
      </Alert>
    )}
  />
));

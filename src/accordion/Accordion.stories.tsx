import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';

import Accordion, {
  AccordionPanel,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelTitle,
} from '.';
import Card from '../card';
import Checkbox from '../checkbox';
import Icon from '../icon';

const stories = storiesOf('Accordion', module);

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum vehicula semper eleifend. Morbi tincidunt, magna non hendrerit malesuada,
  ex est pulvinar nisi, ac luctus lorem quam vel nibh. Integer at tortor luctus
  dui egestas consequat. Donec ut nibh lorem. Phasellus sed sapien lobortis,
  egestas lacus nec, vehicula lorem. Donec hendrerit nibh sed velit placerat
  aliquet. Morbi tristique pretium lorem, nec pretium turpis mattis vel.`;

stories.add('Accordion - Standard', () => (
  <Accordion>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />} open>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
  </Accordion>
));

stories.add('Accordion - Caret Left', () => (
  <Accordion caretLeft>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel title={<AccordionPanelTitle text="Accordion Title" />}>
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
  </Accordion>
));

stories.add('Accordion - Nested', () => {
  return (
    <Accordion>
      <AccordionPanel
        title={<AccordionPanelTitle text="Primary Accordion Title 1" />}
        noPadding
        open
      >
        <Accordion>
          <AccordionPanel title={<h3>Secondary Accordion Title 1</h3>}>
            <p>{LOREM_IPSUM}</p>
          </AccordionPanel>
          <AccordionPanel title={<h3>Secondary Accordion Title 2</h3>}>
            <p>{LOREM_IPSUM}</p>
          </AccordionPanel>
        </Accordion>
      </AccordionPanel>
      <AccordionPanel
        title={<AccordionPanelTitle text="Primary Accordion Title 2" />}
      >
        <p>{LOREM_IPSUM}</p>
      </AccordionPanel>
    </Accordion>
  );
});

stories.add('Accordion - Nested with checkbox', () => {
  class Example extends Component<{}, { checked: boolean }> {
    public state = { checked: true };
    public render() {
      const { checked } = this.state;

      return (
        <Accordion>
          <AccordionPanel
            title={<AccordionPanelTitle text="Fields" />}
            open
          >
            <Accordion>
              <AccordionPanel title={(
                <Checkbox
                  id="accordion-checkbox-example"
                  label="First Name"
                  checked={checked}
                  onChange={this.onCheckboxChange}
                />
              )}>
                <p>{LOREM_IPSUM}</p>
              </AccordionPanel>
            </Accordion>
          </AccordionPanel>
        </Accordion>
      );
    }
    private onCheckboxChange = (e: React.MouseEvent) => {
      this.setState(({ checked }) => ({ checked: !checked }));
    }
  }
  return (
    <Example />
  );
});

stories.add('Accordion - Large', () => (
  <Accordion large>
    <AccordionPanel
      title={
        <Fragment>
          <AccordionPanelIcon iconType="teammate" />
          <AccordionPanelTitle text="Accordion title with icon and intro text" />
          <AccordionPanelDescription text="Accordion title description." />
        </Fragment>
      }
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
    <AccordionPanel
      title={<AccordionPanelTitle text="Accordion with no icon/text" />}
    >
      <p>{LOREM_IPSUM}</p>
    </AccordionPanel>
  </Accordion>
));

const CardContent: React.SFC<any> = ({ title, iconType }) => (
  <p>
    <Icon type={iconType} />
    {title}
  </p>
);

stories.add('Accordion - Editor', () => (
  <Accordion editor caretLeft>
    <AccordionPanel open title={<h4>Add Modules</h4>}>
      <div>
        <Card module centered>
          <CardContent title="Image" iconType="images" />
        </Card>
        <Card module centered>
          <CardContent title={'Image & Text'} iconType="image-text" />
        </Card>
        <Card module centered>
          <CardContent title="Text" iconType="text" />
        </Card>
        <Card module centered>
          <CardContent title="Code" iconType="code" />
        </Card>
        <Card module centered>
          <CardContent title="Columns" iconType="columns" />
        </Card>
        <Card module centered>
          <CardContent title="Button" iconType="button" />
        </Card>
        <Card module centered>
          <CardContent title="Divider" iconType="divider" />
        </Card>
        <Card module centered>
          <CardContent title="Spacer" iconType="spacer" />
        </Card>
        <Card module centered>
          <CardContent title="Social" iconType="social" />
        </Card>
      </div>
    </AccordionPanel>
  </Accordion>
));

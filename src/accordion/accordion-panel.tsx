import React from 'react';
import AnimateHeight from 'react-animate-height';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import AccordionPanelDescription from './accordion-panel-description';
import AccordionPanelIcon from './accordion-panel-icon';
import AccordionPanelTitle from './accordion-panel-title';
import Styles from './accordion.module.scss';

export interface AccordionPanelProps {
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
  open?: boolean;
  noPadding?: boolean;
  onClick?: (e: any) => void;
  title?: React.ReactNode;
}

const AccordionPanelSFC: React.SFC<AccordionPanelProps> = ({
  children,
  className,
  icon,
  open,
  noPadding,
  onClick,
  title,
  ...attributes
}) => {
  return (
    <div
      className={cn('accordion-panel', Styles['accordion-panel'], className, {
        [Styles['has-child']]: noPadding,
        'has-child': noPadding,
        [Styles['is-visible']]: open,
        'is-visible': open,
      })}
      {...attributes}
    >
      <div
        className={cn('accordion-title', Styles['accordion-title'])}
        onClick={onClick}
      >
        {title}
      </div>
      <AnimateHeight duration={500} height={open ? 'auto' : 0}>
        <div
          className={cn('accordion-content', Styles['accordion-content'])}
          style={{ display: 'block' }}
        >
          {children}
        </div>
      </AnimateHeight>
    </div>
  );
};
const openProps = (props: AccordionPanelProps) => props.open;
export class AccordionPanel extends React.Component<AccordionPanelProps, { open: boolean }> {
  public readonly state = {
    open: openProps(this.props),
  };

  public render() {
    return (
      <AccordionPanelSFC
        {...this.props}
        open={this.state.open}
        onClick={this.onAccordionPanelClick}
      >
        {this.props.children}
      </AccordionPanelSFC>
    );
  }

  private onAccordionPanelClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Accordion titles support checkboxes within them -- if the checkbox was clicked, don't
    // toggle the open state.
    if (target.closest && !!target.closest('.input-checkbox-wrap')) {
      return;
    }

    this.setState(({ open }) => ({ open: !open }));
  };
}

export default AccordionPanel;
export {
  AccordionPanelDescription,
  AccordionPanelTitle,
  AccordionPanelIcon,
  AccordionPanelSFC,
};

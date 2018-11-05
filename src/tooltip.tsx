import React from 'react';
import Styles from './styles/tooltip.module.scss';
import cn from './utilities/classnames';

export type TooltipDirection = 'up' | 'down' | 'left' | 'right';

export type TooltipLength = 'small' | 'medium' | 'large' | 'xlarge';

export interface TooltipProps {
  content?: string;
  direction?: TooltipDirection;
  length?: TooltipLength;
  className?: string;
  children?: React.ReactNode;
}

export const Tooltip: React.SFC<TooltipProps> = ({
  content,
  direction,
  length,
  className,
  children,
  ...attributes
}) => {
  return (
    <span
      className={className}
      data-tooltip={content}
      data-tooltip-pos={direction}
      data-tooltip-length={length}
      {...attributes}
    >
      {children}
    </span>
  );
};

Tooltip.defaultProps = {
  direction: 'up',
};

export type HtmlTooltipDirection = 'left' | 'right';

export type HtmlTooltipLength = 'small' | 'medium' | 'large' | 'xlarge';

export interface HTMLTooltipProps {
  direction?: HtmlTooltipDirection;
  length?: HtmlTooltipLength;
  className?: string;
  children?: React.ReactNode;
  hoverTarget?: React.ReactNode;
  debounce?: number;
  style?: object;
}

export interface HTMLTooltipState {
  hovered: boolean;
  tooltipHeight: number;
  opened: boolean;
}

export class HTMLTooltip extends React.Component<
  HTMLTooltipProps,
  HTMLTooltipState
> {
  public static defaultProps = {
    className: '',
    debounce: 1000,
    direction: 'right',
  };

  public state = {
    hovered: false,
    opened: false,
    tooltipHeight: 0,
  };

  private tooltipRef: HTMLDivElement;

  constructor(props: HTMLTooltipProps) {
    super(props);

    this.state = {
      hovered: false,
      opened: false,
      tooltipHeight: 0,
    };

    this.handleHoverIn = this.handleHoverIn.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
  }

  public shouldComponentUpdate(nextProps?: any, nextState?: any) {
    if (this.state.opened === nextState.opened) {
      return false;
    }
    return true;
  }

  public handleHoverIn = () => {
    this.setState({
      hovered: true,
      opened: true,
      tooltipHeight: this.tooltipRef.offsetHeight,
    });
  };

  public handleHoverOut = () => {
    this.setState({ hovered: false });
    setTimeout(() => {
      if (!this.state.hovered) {
        this.setState({ opened: false });
      }
    }, this.props.debounce);
  };

  public render() {
    const {
      direction,
      className,
      children,
      hoverTarget,
      debounce,
      style,
      ...attributes
    } = this.props;

    return (
      <div style={{ position: 'relative', ...style }} {...attributes}>
        <div
          className={cn('tooltip-js-parent', Styles['tooltip-js-parent'])}
          onMouseEnter={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          {hoverTarget}
        </div>
        <div
          className={cn(
            'tooltip-js-content',
            Styles['tooltip-js-content'],
            className,
            {
              [Styles['is-left']]: direction === 'left',
              'is-left': direction === 'left',
              [Styles['is-visible']]: this.state.opened,
              'is-visible': this.state.opened,
            }
          )}
          style={{ top: -(this.state.tooltipHeight / 2) - 3 }}
          data-tooltip-length={this.props.length}
          ref={input => {
            this.tooltipRef = input;
          }}
          onMouseEnter={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Tooltip;

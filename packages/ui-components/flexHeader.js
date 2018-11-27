var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import Counter from './counter';
import { Icon } from './icon';
import Styles from './styles/flex-header.module.scss';
import cn from './utilities/classnames';
export class FlexHeader extends Component {
    render() {
        const _a = this.props, { className, creditsCount, onClose, headerActions, headerTabs, title, tooltipText } = _a, attributes = __rest(_a, ["className", "creditsCount", "onClose", "headerActions", "headerTabs", "title", "tooltipText"]);
        return (React.createElement("header", { className: Styles['flex-header'] },
            React.createElement("div", null,
                onClose && (React.createElement("a", { className: Styles['flex-header-action'], onClick: onClose },
                    React.createElement(Icon, { type: "x" }))),
                React.createElement("div", { className: Styles['flex-header-title'] },
                    React.createElement("h3", null,
                        title,
                        tooltipText && (React.createElement("span", { "data-tooltip": tooltipText, "data-tooltip-pos": "down" },
                            React.createElement(Icon, { type: "info-circle" }))))),
                headerTabs),
            React.createElement("div", { className: Styles['flex-header-right'] },
                typeof creditsCount !== 'undefined' ? (React.createElement(Counter, { text: "Credits", count: creditsCount })) : (''),
                headerActions)));
    }
}
export default FlexHeader;
export const FlexHeaderTabs = props => {
    return React.createElement("div", { className: Styles['flex-header-tabs'] }, props.children);
};
export const FlexHeaderTab = props => {
    return (React.createElement("div", { onClick: props.onClick, className: cn(Styles['flex-header-tab'], {
            [Styles['is-active']]: !!props.isActive,
        }) },
        props.iconType && React.createElement(Icon, { type: props.iconType }),
        props.text));
};
//# sourceMappingURL=flexHeader.js.map
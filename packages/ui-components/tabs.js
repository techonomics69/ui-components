var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Styles from './styles/tabs.module.scss';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
const { map } = React.Children;
export const Tab = (_a) => {
    var { active, children, onClick: handleClick, number, className } = _a, attributes = __rest(_a, ["active", "children", "onClick", "number", "className"]);
    return (React.createElement("li", Object.assign({ className: cn('tab', Styles.tab, className, {
            [Styles['is-active']]: active,
            'is-active': active,
        }), onClick: handleClick }, attributes),
        children,
        ' ',
        number && (React.createElement("span", { className: cn('tab-number', Styles['tab-number']) }, number))));
};
Tab.defaultProps = {
    active: false,
};
export const Tabs = (_a) => {
    var { centered, children, zeroBorder, onChange, className } = _a, attributes = __rest(_a, ["centered", "children", "zeroBorder", "onChange", "className"]);
    return (React.createElement("ul", Object.assign({ className: cn('tab-wrapper', Styles['tab-wrapper'], className, {
            [Styles['is-centered']]: centered,
            'is-centered': centered,
            [Styles['zero-border']]: zeroBorder,
            'zero-border': zeroBorder,
        }) }, attributes), map(children, (tab, index) => {
        return React.cloneElement(tab, {
            onClick(event) {
                const { children: label, onClick = () => { } } = tab.props;
                onClick(event);
                onChange(event, label, index);
            },
        });
    })));
};
export class StatefulTabs extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeIndex: findActiveIndex(this.props.children),
        };
        this.handleChange = (event, label, index) => {
            const { onChange: handleChange } = this.props;
            this.setState({
                activeIndex: index,
            }, () => {
                handleChange(event, label, index);
            });
        };
    }
    render() {
        const { activeIndex } = this.state;
        const tabs = map(this.props.children, (tab, index) => {
            return React.cloneElement(tab, {
                active: index === activeIndex,
            });
        });
        return (React.createElement(Tabs, Object.assign({}, this.props, { onChange: this.handleChange }), tabs));
    }
}
export default Tabs;
//# sourceMappingURL=tabs.js.map
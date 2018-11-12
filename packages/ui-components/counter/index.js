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
import cn from '../utilities/classnames';
import Styles from './counter.module.scss';
export const Counter = (_a) => {
    var { className, text, count } = _a, attributes = __rest(_a, ["className", "text", "count"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles.counter, className, Styles[`counter`]) }, attributes),
        text,
        React.createElement("span", { className: cn(Styles.counter, className, Styles[`counter-bubble`]) }, count)));
};
Counter.defaultProps = {
    className: '',
    count: '',
    text: '',
};
export default Counter;
//# sourceMappingURL=index.js.map
import React, { Component } from 'react';
import Styles from './full-screen-modal-title.module.scss';
class FullscreenModalTitle extends Component {
    render() {
        const { date, dateDescriptor, title, titleDescriptor } = this.props;
        return (React.createElement("div", { className: Styles.titleContainer },
            React.createElement("h1", null, title),
            React.createElement("div", { className: Styles.testInfo },
                React.createElement("p", { className: "small" },
                    React.createElement("strong", null, titleDescriptor)),
                React.createElement("p", { className: "small" },
                    dateDescriptor,
                    " ",
                    date))));
    }
}
export default FullscreenModalTitle;
export { FullscreenModalTitle };
//# sourceMappingURL=index.js.map
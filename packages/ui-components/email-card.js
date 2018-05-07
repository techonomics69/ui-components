import React from 'react';
import { Button, Buttonized, } from './button';
import Icon from './icon';
import { Statistics } from './statistics';
import BtnStyles from './styles/button.module.scss';
import Styles from './styles/email-card.module.scss';
import cn from './utilities/classnames';
const EmailCardSendTime = ({ value, renderSendTimeLink, alert = '' }) => {
    return (React.createElement("div", { className: cn(Styles['email-card-send-time'], { [Styles['has-value']]: !!value }) },
        React.createElement(Buttonized, { type: "secondary" }, renderSendTimeLink && renderSendTimeLink(value)),
        alert));
};
const EmailCardDetails = ({ details }) => {
    const rows = details && details.map((detail) => {
        return (React.createElement("tr", { key: detail.label },
            React.createElement("td", { className: Styles.label }, detail.label),
            React.createElement("td", null, detail.renderEditDetailLink && detail.renderEditDetailLink(detail.value) || detail.value)));
    });
    return (React.createElement("div", { className: Styles['email-card-details'] },
        React.createElement("table", null,
            React.createElement("tbody", null, rows))));
};
const EmailCardContent = ({ thumbnailUrl, onContentEditClick }) => (React.createElement("div", { className: Styles['email-card-content'] }, thumbnailUrl ?
    React.createElement("a", { href: "#" },
        React.createElement("img", { src: thumbnailUrl, onClick: onContentEditClick }),
        React.createElement("span", { className: Styles['email-card-content-edit'] },
            React.createElement(Icon, { type: "pencil" }),
            "Edit"))
    :
        React.createElement(Button, { type: "secondary", onClick: onContentEditClick }, "Add Email Content")));
export const EmailCardAddButton = ({ onClick }) => {
    return (React.createElement("div", { className: `${BtnStyles['btn-list']} ${Styles['email-card-add']}` },
        React.createElement(Button, { type: "secondary", onClick: onClick }, "Add an Email")));
};
export class EmailCard extends React.Component {
    render() {
        const alertEl = this.props.renderAlert && this.props.renderAlert();
        return (React.createElement("div", { className: cn(Styles['email-card-wrap'], {
                [Styles['has-alert']]: !!this.props.renderAlert,
                [Styles['is-editable']]: this.props.editable,
                [Styles['is-live']]: this.props.live,
                [Styles['is-paused']]: this.props.paused,
            }) },
            React.createElement(EmailCardSendTime, { value: this.props.sendTimeValue, renderSendTimeLink: this.props.renderSendTimeLink, alert: alertEl }),
            React.createElement(Statistics, { statsClassName: "email-stats", statistics: this.props.statistics }),
            React.createElement("div", { className: Styles['email-card'] },
                React.createElement("div", { className: Styles['email-card-count'] },
                    React.createElement("p", null,
                        "Email ",
                        this.props.n)),
                React.createElement(EmailCardContent, { thumbnailUrl: this.props.thumbnailUrl, onContentEditClick: this.props.onContentEditClick }),
                React.createElement(EmailCardDetails, { details: this.props.details })),
            alertEl));
    }
}
EmailCard.defaultProps = {
    editable: false,
    editing: false,
    live: false,
    paused: false,
    renderAlert: false,
};
export default EmailCard;
//# sourceMappingURL=email-card.js.map
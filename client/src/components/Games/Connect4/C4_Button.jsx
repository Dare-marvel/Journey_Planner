import React from "react";
import "./C4_Button.css";

class ToggleButtonWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOn: true, text: "NAIVE AI" };
    }

    handleToggle(e) {
        this.props.getModeChange();
        this.setState({
            isOn: !this.state.isOn,
            text: this.state.isOn ? "MINIMAX" : "NAIVE AI"
        });
    }

    render() {
        let classNames = [
            "component-wrapper",
            this.state.isOn
                ? "component-wrapper_is-light"
                : "component-wrapper_is-dark"
        ].join(" ");
        return React.createElement(
            "div",
            { className: classNames },
            React.createElement(Switch, {
                isOn: this.state.isOn,
                text: this.state.text,
                handleToggle: this.handleToggle.bind(this)
            })
        );
    }
}

const Switch = function (props) {
    let classNames = [
        "switch__connect4",
        props.isOn ? "switch_is-on" : "switch_is-off"
    ].join(" ");
    return React.createElement(
        "div",
        { className: classNames, onClick: props.handleToggle },
        React.createElement(ToggleButton, {
            isOn: props.isOn,
            text: props.text
        })
    );
};

const ToggleButton = function (props) {
    let classNames = [
        "toggle-button",
        props.isOn ? "toggle-button_position-right" : "toggle-button_position-left"
    ].join(" ");
    return (
        React.createElement("div", { className: classNames }),
        React.createElement("h1", { className: "button-text" }, props.text)
    );
};

export default ToggleButtonWrapper;
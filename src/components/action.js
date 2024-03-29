import React, { Component } from "react";

import Icon from "./icon";

class Action extends Component {
    handleAction = function() {
        this.props.onClick();
        document.getElementById(this.id).classList.toggle("action-remove");
    }.bind(this);

    render() {
        this.id = `action ${this.props.id}`;
        return (
            <a
                id={this.id}
                onClick={() => this.handleAction()}
                className={`${this.props.className} action`}
            />
        );
    }
}

export default Action;

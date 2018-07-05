import React, { Component } from "react";

class Arrow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    }

    toggleArrow = function(props) {
        this.props.callback(this.state.status);
        document.getElementById(this.id).classList.toggle('arrow-closed');
        this.setState({ status: !this.state.status });
    }.bind(this);

    render() {
        this.id = `arrow-${this.props.id}`
        return (
            <a
                onClick={() => this.toggleArrow()}
                id={this.id}
                className={`${this.props.className} arrow`}
            />
        );
    }
}

export default Arrow;

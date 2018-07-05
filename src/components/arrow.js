import React, { Component } from "react";

class Arrow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    }

    toggleArrow = function(props) {
        document.getElementById('arrow').classList.toggle('arrow-closed');
        this.setState({ status: !this.state.status });
    }.bind(this);

    render() {
        return (
            <a
                onClick={() => this.toggleArrow()}
                id="arrow"
                className={`${this.props.className} arrow`}
            />
        );
    }
}

export default Arrow;

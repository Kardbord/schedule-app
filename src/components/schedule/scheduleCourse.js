import React, { Component } from "react";


import * as actions from '../../actions';

class ScheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <label>{this.props.title}</label>
            </div>
        );
    }
}

export default ScheduleCourse;
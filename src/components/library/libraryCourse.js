import React, { Component } from "react";

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">
                        Problem Solving
                    </label>
                    {Icon("fas fa-check", "library-course__icon")}
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action" />
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus quis placerat ante, et commodo ipsum. Aliquam
                        nec ante non est aliquet interdum. Pellentesque
                        vestibulum ipsum a pulvinar cursus. Integer congue arcu
                        nec odio convallis, et iaculis massa congue. Sed
                        efficitur elit erat, eu facilisis enim sodales quis.
                        Suspendisse varius lacus nisl, et malesuada ligula
                        feugiat ornare. Suspendisse tristique mattis nibh, nec
                        rutrum odio volutpat ac.
                    </p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;

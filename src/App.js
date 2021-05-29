import React, { Component } from "react";
import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly.css";

import GoalSetting from './pages/GoalSetting';

export default class App extends Component {
    render() {
        return (
            <div className="early-learning-goals">
                <GoalSetting />
            </div>
        );
    }
}

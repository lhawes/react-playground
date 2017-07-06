'use strict';

import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            message: this.props.msg || 'default message'
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
            );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
            <p>{this.state.message}</p>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
    }
}

export default Clock;
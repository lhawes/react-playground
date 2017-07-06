'use strict';

import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    sayHi(event) {
        alert(`Hi ${this.props.name}`)
    }

    render() {
        return (
            <div>
                <a href="#"
                onClick={this.sayHi.bind(this)}>Say Hi {this.props.name}</a>
            </div>
        );
    }
}

export default HelloWorld;

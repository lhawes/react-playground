'use strict';

import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.numbers.map((number) =>
            <li key={number.toString()}>Number: {number} {number % 2 === 0 ? 'Even' : 'Odd'}</li>
          );
        return (
            <div>
                <p>List of numbers: {this.props.numbers}</p>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default List;

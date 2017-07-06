'use strict';

import React from 'react';

const Simple = (props) => {
    return <b>{props.greet} a React App</b>
}

const Container = (props) => {
    return (
        <p>
            <Simple greet={props.greet}/>
        </p>
    );
}

export default Container;
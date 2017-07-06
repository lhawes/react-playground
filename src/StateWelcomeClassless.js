'use strict';

import React from 'react';

const HelloWorld = ({name}) => {
    const sayHi = event => {
        alert(`Hi ${name}`);
    }
    const sayHi2 = function(event) {
        alert(`Hi2 ${name}`)
    }

    const message = `Say Hi ${name}`;
    const message2 = `Say Hi2 ${name}`;

    return (
        <div>
            <a href="#"
            onClick={sayHi}>{message}</a>
            <br />
            <a href="#"
            onClick={sayHi2}>{message2}</a>
        </div>
    )
}

export default HelloWorld;

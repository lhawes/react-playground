'use strict';

import React from 'react';

const HelloWorld = ({name}) => {
    const sayHi = event => {
        alert(`Hi ${name}`);
    }

    return (
        <div>
            <a href="#"
            onClick={sayHi}>Say Hi</a>
        </div>
    )
}

export default HelloWorld;

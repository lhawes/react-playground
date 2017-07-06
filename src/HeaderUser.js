'use strict';

import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

function HeaderUser(props) {
    return (
        <h4>
            Hello, {formatName(props.user || user)}!
        </h4>
    );
}

export default HeaderUser;

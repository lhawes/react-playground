'use strict';

import React, { Component } from 'react';
import HeaderUser from './HeaderUser';
import StateWelcome from './StateWelcome';
import StateWelcomeClassless from './StateWelcomeClassless';
import Clock from './Clock';
import Simple from './Simple';
import SlideShow from './SlideShow';

class App extends Component {
    render() {
        return (
            <div>
                <Simple greet="Welcom to"/>
                <hr />
                <HeaderUser />
                <hr />
                <StateWelcome name="lucas"/>
                <hr />
                <StateWelcomeClassless name="hawes" />
                <hr />
                <Clock />
                <hr />
                <SlideShow />
            </div>
        );
    }
}

export default App;

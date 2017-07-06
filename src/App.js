'use strict';

import React, { Component } from 'react';
import HeaderUser from './HeaderUser';
import StateWelcome from './StateWelcome';
import StateWelcomeClassless from './StateWelcomeClassless';
import Clock from './Clock';
import Simple from './Simple';
import SlideShow from './SlideShow';
import List from './List';
import Form from './Form';
import Temperature from './Temperature';

class App extends Component {
    render() {
        return (
            <div>
                <Breaks />
                <Simple greet="Welcome to"/>
                <Spacer />
                <HeaderUser />
                <Spacer />
                <StateWelcome name="lucas"/>
                <Spacer />
                <StateWelcomeClassless name="hawes" />
                <Spacer />
                <Clock />
                <Spacer />
                <SlideShow />
                <Spacer />
                <List numbers={[1, 2, 3, 4]} />
                <Spacer />
                <Form />
                <Spacer />
                <Temperature />
                <Breaks />
            </div>
        );
    }
}

const Spacer = () => <div><hr /><Breaks /></div>;
const Breaks = () => <div><br /> <br /> <br /> <br /></div>

export default App;

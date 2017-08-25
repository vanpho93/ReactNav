import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SignIn } from './components/SignIn';
import { GoPlay } from './components/GoPlay';

export class App extends Component {
    render() {
        return <GoPlay />;
    }
}

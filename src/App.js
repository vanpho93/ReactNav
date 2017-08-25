import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { TabNavigator } from 'react-navigation';

export class App extends Component {
    render() {
        return <Contact />;
    }
}

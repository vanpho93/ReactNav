import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { DrawerNavigator } from 'react-navigation';

const DrawerMenu = DrawerNavigator({
    Home: { screen: Home }
}, { contentComponent: Menu });

export class App extends Component {
    render() {
        return <DrawerMenu />;
    }
}

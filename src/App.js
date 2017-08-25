import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListPeople from './components/ListPeople';
import { StackNavigator } from 'react-navigation';
import { SayHello } from './components/SayHello';

const StackComponent = StackNavigator({
    ListPeople: { screen: ListPeople },
    SayHello: { screen: SayHello }
}, { headerMode: 'none' });

export class App extends Component {
    render() {
        return <StackComponent />
    }
}

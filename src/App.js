import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class App extends Component {
    render() {
        return <View style={styles.container}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#62ABDC'
    }
});


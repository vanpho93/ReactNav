import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class SayHello extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Pho</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4B7D7'
    }
});

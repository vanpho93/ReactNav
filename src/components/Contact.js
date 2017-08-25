import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Contact</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CAE3FC'
    }
});


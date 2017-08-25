import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SignIn</Text>
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


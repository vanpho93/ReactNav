import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
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


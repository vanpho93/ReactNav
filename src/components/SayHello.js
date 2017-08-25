import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class SayHello extends Component {
    render() {
        const { goBack, state } = this.props.navigation;
        const { name } = state.params;
        return (
            <View style={styles.container}>
                <Text>Hello {name}</Text>
                <TouchableOpacity onPress={() => goBack()}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
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

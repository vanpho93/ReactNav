import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class SayHello extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Hello Pho</Text>
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

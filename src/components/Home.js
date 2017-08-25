import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>Open</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Close</Text>
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
        backgroundColor: '#FBE27F'
    }
});


import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const peopleName = ['Pho', 'Khoa', 'An', 'Truong', 'Dat'];

export default class ListComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={peopleName}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5'
    }
});

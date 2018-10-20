import React, { Component } from 'react';
import { StyleSheet, Text, View, Images } from 'react-native';

export default class Splash extends Component {
    render() {
      return (
        <View style={styles.container}>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b870ef',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
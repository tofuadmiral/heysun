import React, { Component } from 'react';
import { StyleSheet, Text, View, Images } from 'react-native';

export default class Splash extends Component {
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.txt}>HeySun</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b715d3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 60
    }
});
  

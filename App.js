import React, { Component } from 'react';
import { StyleSheet, Text, View, Images } from 'react-native';
import Splash from './components/splash'
import Login from './components/login'

export default class App extends Component {
  render() {
    return (
      <Splash />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

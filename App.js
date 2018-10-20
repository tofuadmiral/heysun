import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, Image } from 'react-native';

//------------------------------splash
class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./assets/bed.png')}/>
          <Text style={styles.title}>HeySun</Text>
        </View>
      </View>
    );
  }

}

//-----------------------------------login

class Login extends Component{
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./assets/bed.png')}/>
          <Text style={styles.header1}>Welcome to HeySun</Text>
        </View>
        <View style={styles.formContainer}>

        </View>

      </View>
    );
  }

}

//---------------------------------loginForm

class LoginForm extends Component{
  render() {
    return(
      <View>

      </View>    
    );
  }
}

//---------------------------------------app

export default class App extends Component {
  render() {
    return (
     <Login />
    );
  }
}



//------------------------------------------style sheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9059ff',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 60,
  },
  header1: {
    color: '#fff',
    fontSize: 24
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 120
  },

});

AppRegistry.registerComponent('heysun', () => App);

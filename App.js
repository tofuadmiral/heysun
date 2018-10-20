import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LoginForm from './Login/LoginForm'

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
          <LoginForm></LoginForm>
        </View>

      </View>
    );
  }

}

//---------------------------------loginForm
/*
class LoginForm extends Component{
  render() {
    return(
      <View style={styles.form}>
        <Test />
        <TextInput placeholder="  username or email" placeholderTextColor="white" underlineColorAndroid='transparent' style={styles.input} />
        <TextInput placeholder="  password" placeholderTextColor="white" underlineColorAndroid='transparent' style={styles.input} />

      </View>    
    );
  }
}
*/
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
  form: {
    padding: 20,
   
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.5)',
    color: '#fff',
    marginBottom: 20,
  
  },

});

AppRegistry.registerComponent('heysun', () => App);

import React, { Component } from 'react';
import { AppRegistry , StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LoginForm from './Login/LoginForm';
import firebase from "firebase";


// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};


firebase.initializeApp(config);
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

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,TextInput,Alert} from 'react-native';

import db from '../config';
import firebase from 'firebase';
export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
        }
      }
      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          this.props.navigation.navigate('WeatherScreen')
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
    render(){
        
        return(
            <View>
                  <Image
     style = {{
       width:80,
       height:80,
       alignSelf: 'center',
       marginTop: '52%',
     }}
    source = {require('../News.png')}/>
                <Text style = {styles.header}>Newsly</Text>
                <Text style = {styles.Tagline}>News made easy</Text>
                <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
                <TouchableOpacity style = {styles.LoginButton} onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}><Text style = {{fontSize:20,color:'#fff',fontWeight:'bold'}}>Go</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.SignupButton}  onPress = { () => this.props.navigation.navigate('SignupScreen')}><Text style = {{fontSize:9,color:'#bab8b3',}}>Don't have a account? <Text style = {{fontWeight:'bold'}}>Sign up</Text></Text></TouchableOpacity>
                <TouchableOpacity style = {styles.BackButton} onPress = { () => this.props.navigation.navigate('WelcomeScreen')}><Text style = {{fontSize:13,color:'#bab8b3',}}>Back</Text></TouchableOpacity>            
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        color:'#457096',
        fontSize:50,
        textAlign:'center',
        marginTop:'7%',
        fontWeight:'bold',
    },
    Tagline:{
        fontSize:13,
        textAlign:'center',
        color:'#bab8b3'
    },
    LoginButton: {
        backgroundColor:'#6dabe4',
        marginTop:'5%',
        borderWidth: 2,
        borderColor: '#6dabe4',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 60,
        borderRadius: 9,
        alignSelf: 'center',
    },
    SignupButton: {
        backgroundColor:'#fff',
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 60,
        alignSelf: 'center',
    },
    BackButton: {
        backgroundColor:'#fff',
        marginTop:10,
        width: 300,
        height: 60,
        marginLeft:30
    },
      loginBox:{
        width: 350,
        height: 55,
        borderWidth: 1.5,
        borderColor : '#a8adb3',
        borderRadius:10,
        fontSize: 20,
        margin:10,
        paddingLeft:10,
        alignSelf: 'center',
      },
  });
  
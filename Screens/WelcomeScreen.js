import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
export default class WelcomeScreen extends React.Component {
    
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
                <TouchableOpacity style = {styles.LoginButton} onPress = { () => this.props.navigation.navigate('LoginScreen')}><Text style = {{fontSize:20,color:'#fff',fontWeight:'bold'}}>Login</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.SignupButton} onPress = { () => this.props.navigation.navigate('SignupScreen')}><Text style = {{fontSize:20,color:'#6dabe4',fontWeight:'bold'}}>Sign up</Text></TouchableOpacity>
                <Text style = {{fontSize:9,color:'#bab8b3',marginTop:'30%',textAlign:'center'}}>Copyright @sanatgupta</Text>
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
        marginTop:'10%',
        borderWidth: 2,
        borderColor: '#6dabe4',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
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
  });
  
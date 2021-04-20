import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import NewsScreen from './Screens/NewsScreen';
import WeatherScreen from './Screens/WeatherScreen';
import 'react-native-gesture-handler';
import { AppTabNavigator } from './Screens/AppTabNavigator';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import TopTabNavigator from './Screens/MaterialTopTabNavigator';
export default class App extends React.Component {
  render(){
  return (
    
    <AppContainer/>
    
  );
}
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  LoginScreen:LoginScreen,
  SignupScreen:SignupScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen,
 BottomTab:AppTabNavigator,
  TopTabNavigator:TopTabNavigator
})
const AppContainer = createAppContainer(AppNavigator);

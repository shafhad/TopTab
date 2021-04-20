import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NewsScreen from './NewsScreen';
import WeatherScreen from './WeatherScreen';

export const AppTabNavigator = createBottomTabNavigator({
  News : {
    screen: NewsScreen,
    navigationOptions :{
      tabBarLabel : "News",
    }
  },
  Weather: {
    screen: WeatherScreen,
    navigationOptions :{
      tabBarLabel : "Weather",
    }
  },
});
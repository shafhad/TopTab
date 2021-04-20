import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import axios from 'axios';
import {Header} from 'react-native-elements'
export default class WeatherScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      weather : '',
    }
  }
  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=28.7041&lon=77.1025';
    return fetch(url)
    .then(response => response.json())
    .then(responseJson =>{
      this.setState({
        weather: responseJson,
      })
    })
    .catch(error => {
     console.error(error);
    })
  }
  componentDidMount = () => {
this.getWeather();
  }

  render(){
    if(this.state.weather === '') {
    return (
<View style={styles.container}>
<Text style = {{fontSize:30,textAlign:'center',justifyContent:'center',marginTop:300}}>Getting Your Weather...</Text>

</View>

    );
} else{
  return(
    <ScrollView>
  <View style={styles.container2}>
    <Header
backgroundColor = {'#1d2d50'}
centerComponent = {{text:'Newsly',style:{color:'#ffffff',fontSize:44,fontWeight:'bold'}}}/>
<View style = {{marginTop: 50}}>
  <Text style = {styles.info}> Location:India</Text>
  <Text  style = {styles.info}> Weather: {this.state.weather.weather[0].description}</Text>
  <Text  style = {styles.info}> Wind Speed: {this.state.weather.wind.speed} Knots</Text>
  <Text  style = {styles.info}> Temperature: {this.state.weather.main.temp} C°</Text>
  <Text  style = {styles.info}> Min Temperature: {this.state.weather.main.temp_min} C°</Text>
  <Text  style = {styles.info}> Max Temperature: {this.state.weather.main.temp_max} C°</Text>
  <Text  style = {styles.info}> Pressure: {this.state.weather.main.pressure} Pascal</Text>
  <Text  style = {styles.info}> Humidity: {this.state.weather.main.humidity}%</Text>
</View>

  </View>
  </ScrollView>
  );
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  container2: {
    flex: 1,
  },
info: {
  fontSize: 25,
}

});

import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

import LoginScreen from './LoginScreen';// Home screen
import HomeScreen from './HomeScreen';// About Screen

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
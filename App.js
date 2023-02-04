import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen
import React from 'react';
import { SafeAreaView, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';// Home screen
import HomeScreen from './HomeScreen';// About Screen
// export default function App() {
//   const [email, onChangeEmail] = React.useState('');
//   return (
//     <View style={styles.container}>
//       {/* <Text>LETS GET STRUGGLE FINANCING! - RizzGod</Text> */}
//       {/* <SafeAreaView> */}
//         <TextInput
//           onChangeText={onChangeEmail}
//           value={email}
//         />
//       {/* </SafeAreaView> */}
//     </View>
//   );
// }

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
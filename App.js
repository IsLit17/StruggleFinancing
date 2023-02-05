import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen
// import React from 'react';
import { SafeAreaView, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import SubsScreen from './SubsScreen';
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

function Text() {
  const [text, onChangeText] = React.useState('Useless Text');
  return(
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
  )
}

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 

export default function App() {
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <>

    <NavigationContainer>
      <Stack.Navigator>
        
      
      {/* <Stack.Screen
          name="textbox"
          component={Text}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        /> 
        <Stack.Screen
          name="Subs"
          component={SubsScreen}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


// export default App; /
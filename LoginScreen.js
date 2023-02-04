//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, ActivityIndicator} from 'react-native'; // importing components
import { SafeAreaView, TextInput} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

// const auth = getAuth();

export async function loginWithEmail(email, password, navigation, onChangeAlert, onChangeLoading){
  console.log('inside log in with email')
  onChangeLoading(
    <View style = {styles.overlayLoadingContainer}>
      <ActivityIndicator style={styles.loading} size="large"/>
    </View>
  )
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('successful login as: ', user.email)
      console.log('uid: ', user.uid)
      navigation.navigate('Home')
      onChangeLoading(null)
    })
    .catch((error) => {
      console.log('error login')
      onChangeLoading(null)
      onChangeAlert(
        Alert.alert(
          "Invalid Credentials",
          "Invalid password or email",
          [
            {
              text: "Go Back",
              onPress: () => console.log("Ok Pressed") && onChangeAlert(null),
              style: "cancel"
            }
          ],
          { cancelable: false }
        )
      )
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return;
}


// The home screen contains the text “You are on the home page” and a button.
export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [alert, onChangeAlert] = React.useState(null);
  const [loading, onChangeLoading] = React.useState(null);



  return (
    <View style={styles.container}>
      <Text style = {{bottom: 60, fontSize: 50, color: '#072'}}>S T R U G G L E</Text>
      <Text style = {{bottom: 50, fontSize: 45, color: '#072'}}>F I N A N C I N G</Text>
      <View style = {{alignItems: 'center'}}>
        <Image source={require('./assets/loginicon.png')} style = {{width: 100, height: 100}}/>
      </View>
      <Text style = {{fontSize: 25, color: '#072'}}>Enter Login Credentials</Text>
      
      <TextInput
        style={textboxStyle.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={textboxStyle.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
      />


      <Text style = {{right: 11}}>Don't have an account -{'>'} {""}

        <Text style={{color: 'blue', textDecorationLine: 'underline'}}
          onPress={() => navigation.navigate('Sign Up')}>
          Sign up
        </Text>
      </Text>
      {alert}
      {loading}
      <Button
        title="Login"
        onPress={() => loginWithEmail(email, password, navigation, onChangeAlert, onChangeLoading)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlayLoadingContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent:'center',
    alignItems:'center',
    zIndex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
 },
});


// export default LoginScreen;
const textboxStyle = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// export default LoginScreen;
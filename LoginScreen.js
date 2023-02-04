//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native'; // importing components
import { SafeAreaView, TextInput} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

// const auth = getAuth();

export async function loginWithEmail(email, password, navigation){
  console.log('inside log in with email')
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('successful login as: ', user.email)
      navigation.navigate('Home')

    })
    .catch((error) => {
      console.log('error login')

      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return;
}


// The home screen contains the text “You are on the home page” and a button.
export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style = {{alignItems: 'center'}}>
        <Image source={require('./assets/loginicon.png')} style = {{width: 100, height: 100}}/>
      </View>
      <Text style = {{fontSize: 28, color: '#aaf'}}>Login</Text>
      
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


      <Text style = {{right: 11}}>Don't have an account -> {""}

        <Text style={{color: 'blue', textDecorationLine: 'underline'}}
          onPress={() => navigation.navigate('Sign Up')}>
          Sign up
        </Text>
      </Text>
{/*       
      <Button
          title="Home Page"
          onPress={() => navigation.navigate('Home')}
      />  */}
      <Button
        title="Login"
        onPress={() => loginWithEmail(email, password, navigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
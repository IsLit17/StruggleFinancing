import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, ActivityIndicator} from 'react-native'; // importing components
import { SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export async function signInWithEmail(email, password, navigation, onChangeLoading){
  console.log('inside sign up with email')
  onChangeLoading(
    <View style = {styles.overlayLoadingContainer}>
      <ActivityIndicator style={styles.loading} size="large"/>
    </View>
  )
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      onChangeLoading(null)
      const user = userCredential.user;
      console.log('successful created user as: ', user.email)
      console.log('uid: ', user.uid)
      navigation.navigate('Home')

      // ...
    })
    .catch((error) => {
      onChangeLoading(null)
      console.log('error creating user ')
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  // await signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     navigation.navigate('Home')
  //     onChangeLoading(null)
  //   })
  //   .catch((error) => {
  //     console.log('error login')
  //     onChangeLoading(null)
  //     onChangeAlert(
  //       Alert.alert(
  //         "something went wrong",
  //         "Invalid password or email",
  //         [
  //           {
  //             text: "Go Back",
  //             onPress: () => console.log("Ok Pressed") && onChangeAlert(null),
  //             style: "cancel"
  //           }
  //         ],
  //         { cancelable: false }
  //       )
  //     )
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  return;
}



// About screen contains the text “You are on the about page” and a button.
export default function SignUpScreen({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password1, onChangePassword1] = React.useState('');
  const [password2, onChangePassword2] = React.useState('');
  const [first, onChangeFirst] = React.useState('');
  const [last, onChangeLast] = React.useState('');
  const [loading, onChangeLoading] = React.useState(null);
  const [alert, onChangeAlert] = React.useState(null);


    // onChangeAlert(
    //   Alert.alert(
    //     "Invalid Credentials",
    //     "Invalid password or email",
    //     [
    //       {
    //         text: "Go Back",
    //         onPress: () => console.log("Ok Pressed") && onChangeAlert(null),
    //         style: "cancel"
    //       }
    //     ],
    //     { cancelable: false }
    //   )
    // )
    return (
      <View style={styles.container}>
        <Text style = {{top: 15, fontSize: 38, color: '#072'}}>Spend Smarter</Text>
        <Text style = {{top: 17.5, fontSize: 37, color: '#072'}}>With</Text>
        <Text style = {{top: 20, fontSize: 35, color: '#072', fontWeight: 'bold'}}>Struggle Financing</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex: 1, margin: 10, padding: 20}}>
            <TextInput 
              style={textboxStyle.input}
              onChangeText={onChangeFirst}
              value={first}
              placeholder="First Name"
            />
            <TextInput
              style={textboxStyle.input}
              onChangeText={onChangeLast}
              value={last}
              placeholder="Last Name"
            />
            <TextInput
              style={textboxStyle.input}
              keyboardType="email-address"
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
            />
            <TextInput
              style={textboxStyle.input}
              onChangeText={onChangePassword1}
              value={password1}
              placeholder="Password"
            />
            <TextInput
              style={textboxStyle.input}
              onChangeText={onChangePassword2}
              value={password2}
              placeholder="Confirm Password"
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style = {{bottom: 170, fontSize: 25}}>Bronco's Country {""}
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}
            onPress={() => signInWithEmail(email, password1, navigation, onChangeLoading)}>
            Lets Ride
          </Text>
        </Text>

        
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
  });
  
  
  // export default LoginScreen;
  const textboxStyle = StyleSheet.create({
    input: {
      height: 40,
      margin: 15,
      borderWidth: 1,
      padding: 10,
      width: 280,
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

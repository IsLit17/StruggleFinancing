//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components
import { SafeAreaView, TextInput} from 'react-native';
import {LoginWithEmail} from './firebaseAuth/auth_login_password'


// The home screen contains the text “You are on the home page” and a button.
export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>You are on the login page</Text>
      <Text>{email}</Text>
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
      {/* <Button
          title="home page"
          onPress={() => navigation.navigate('Home')}
      /> */}
      <Button
        title="Login"
        onPress={() => LoginWithEmail(email, password)}
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

const textboxStyle = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// export default LoginScreen;
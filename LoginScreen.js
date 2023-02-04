//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components
import { SafeAreaView, TextInput} from 'react-native';


// The home screen contains the text “You are on the home page” and a button.
export default function LoginScreen({navigation}) {
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>You are on the login page</Text>
      <TextInput
        style={styles2.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles2.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Button
          title="home page"
          onPress={() => navigation.navigate('Home')}
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

const styles2 = StyleSheet.create({
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
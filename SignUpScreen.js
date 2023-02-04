import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native'; // importing components
import { SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';

// About screen contains the text “You are on the about page” and a button.
export default function SignUpScreen({navigation}) {
    const [email, onChangeEmail] = React.useState('');
    const [password1, onChangePassword1] = React.useState('');
    const [password2, onChangePassword2] = React.useState('');
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');
  
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
        <Text style = {{bottom: 170, fontSize: 50}}>Bronco's Country {""}
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('Home')}>
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

//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// The home screen contains the text “You are on the home page” and a button.
class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the login page</Text>
        <Button
            title="home page"
            onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoginScreen;
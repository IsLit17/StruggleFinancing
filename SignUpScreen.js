import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// About screen contains the text “You are on the about page” and a button.
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Sign Up page</Text>
        <Button
            title="Back to login"
            onPress={() => this.props.navigation.navigate('Login')}
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

export default HomeScreen;
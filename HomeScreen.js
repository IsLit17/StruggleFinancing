import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button, Alert} from "react-native";
// About screen contains the text “You are on the about page” and a button.
export default function HomeScreen({navigation}) {
    const notification = () =>
        Alert.alert(
        "Testing Alert",
        "Stop spending money",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok Pressed"),
            style: "cancel"
          },
          { text: "Nope", onPress: () => console.log("Nope Pressed") }
        ],
        { cancelable: false }
      );
    return (
      <View style={styles.container}>
        <Text style= {styles.greenTxt}>Struggle Financing</Text>
        <Text style = {styles.blueTxt}>Notifications</Text>
        <Button title="2-Button Alert" onPress={notification} />
        <View style = {bottomStyle.container}>
        <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Subscriptions"
        />
        <Button
            title="Logout"
            onPress={() => navigation.navigate('Login')}
        />
        </View>
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
    greenTxt: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 24,
    },
    blueTxt: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

const bottomStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    square: {
        width: 100,
        height: 100,
    }
});
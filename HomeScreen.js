import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button, Alert} from "react-native";
// About screen contains the text “You are on the about page” and a button.
export default function HomeScreen({navigation}) {
    function NotifObj(name, days) {
        this.name = name;
        this.days = days;
    }
    const objList = [new NotifObj("Electric", 2), new NotifObj("Water", 3)]
    const exList = [1,2,3]
    const notification = () =>
        Alert.alert(
        "Reminder",
        "Have you already paid this?",
        [
          {
            text: "Yes",
            onPress: () => console.log("Yes Pressed"),
            style: "cancel"
          },
          { text: "Dismiss", onPress: () => console.log("Dismiss Pressed") }
        ],
        { cancelable: false }
        );
    return (
      <View style={styles.container}>
        <Text style= {styles.greenTxt}>Struggle Financing</Text>
        <Text style = {styles.blueTxt}>Notifications</Text>
        {exList.map(x => <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'green', padding: 10, borderRadius: 4 }} onPress={notification}>
            <Text style={{ color: '#fff', fontSize: 24 }}>due in {x} days</Text>
        </TouchableOpacity>)}
        {/* <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'green', padding: 10, borderRadius: 4 }} onPress={notification}>
            <Text style={{ color: '#fff', fontSize: 24 }}>x => due in 2 days</Text>
        </TouchableOpacity> */}
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
    },
    bubble : {
        // maxWidth: scale(250),
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 20,
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
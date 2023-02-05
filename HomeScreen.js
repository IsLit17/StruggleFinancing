import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button, Alert} from "react-native";
// About screen contains the text “You are on the about page” and a button.
export default function HomeScreen({navigation}) {
    function NotifObj(name, days) {
        this.name = name;
        this.days = days;
    }
    const objList = [new NotifObj("Electric", 2), new NotifObj("Water", 3), new NotifObj("Gas", 4)]
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
        <View style = {notifStyle.container}>
        {objList.map(x => <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#072', padding: 10, borderRadius: 4 }} onPress={notification}>
            <Text style={{ color: '#fff', fontSize: 30 }}>{x.name} bills due in {x.days} days</Text>
        </TouchableOpacity>)}
        </View>
        <View style = {bottomStyle.container}>
        <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Subscriptions"
            onPress={() => navigation.navigate('Subs')}
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
      backgroundColor: '#ffe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    greenTxt: {
        color: '#072',
        fontWeight: 'bold',
        fontSize: 24,
    },
    blueTxt: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

const bottomStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        align: 'center',
        justifyContent: 'space-around',
        color: '#072'
    },
    square: {
        width: 100,
        height: 100,
    }
});

const notifStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        align: 'center',
    },
});
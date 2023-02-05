import React, { Component, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button, Alert, SafeAreaView, TextInput} from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// About screen contains the text “You are on the about page” and a button.
export default function HomeScreen({navigation, route}) {
  const [subscriptions, setSubs] = React.useState({});
  var [spendCap, setSpendCap] = React.useState(0);
  var keyList = null;
  (subscriptions != null ? keyList = Object.keys(subscriptions) : keyList = []);
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

    useEffect(async() => {
      console.log('here')
      const docRef = doc(db, "users", route.params.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setSubs(docSnap.data().subscriptions)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }, [])
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style= {styles.greenTxt}>Struggle Financing</Text>
      <SafeAreaView>
        <Text style = {{top: 10, right: 85, fontSize: 20}}>This months spending limit:</Text> 
      </SafeAreaView>
      <SafeAreaView style = {{bottom: 35, left: 110}}>
        <TextInput
              style={{height: 40, margin: 12, borderWidth: 1, padding: 10, width: 150}}
              onChangeText = {setSpendCap}
              value = {spendCap}
              placeholder="Update Spend Limit"
        />
      </SafeAreaView>
      
      <View style = {notifStyle.container}>
      {keyList.map(sub => 
        <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#072', padding: 10, borderRadius: 4 }} onPress={notification}>
            <Text style={{ color: '#fff', fontSize: 20 }}>{sub} bill due on {subscriptions[sub].dueDate} for ${subscriptions[sub].cost}</Text>
        </TouchableOpacity>
      )}
      </View>
      <SafeAreaView style = {bottomStyle.container}>

        <Button
            title="Subscriptions"
            onPress={() => navigation.navigate('Subs', {email: route.params.email})}
        />
        <Button
            title="Logout"
            onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
    </SafeAreaView>
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
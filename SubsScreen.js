import React, { Component, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button, Alert, ScrollView} from "react-native";
import { DataTable } from 'react-native-paper';
import { Center, VStack } from 'native-base';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
// About screen contains the text “You are on the about page” and a button.
export default function SubsScreen({navigation, route}) {
    const [subscriptions, setSubs] = React.useState([]);
    var keyList = null;
    var [subTotal] = React.useState(0);
    (subscriptions != null ? keyList = Object.keys(subscriptions) : keyList = []);
    for (var i = 0; i < keyList.length; i++) {
      (subscriptions != null ? subTotal += parseInt(subscriptions[keyList[i]].cost) : null);
    }
    useEffect(() => {

      async function fetchData() {
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
      }
      fetchData();

      // console.log('here')
      // const docRef = doc(db, "users", route.params.email);
      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      //   setSubs(docSnap.data().subscriptions)
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    }, [])
    console.log(keyList);
    return (
      <View style = {styles.container}>
          <Text style= {styles.greenTxt}>Subscriptions</Text>
          <Text style= {styles.greenTxt}>Total Cost = {subTotal}</Text>
          <View>
          <Button
            title="Add Subscription"
            onPress={() => navigation.navigate('SubPrompt', {email: route.params.email})}
          />
          </View>

          <ScrollView style = {{width: 350}}>
          <DataTable style={tableStyles.container}>
            <DataTable.Header style={tableStyles.tableHeader}>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Price</DataTable.Title>
              <DataTable.Title>Date</DataTable.Title>
            </DataTable.Header>
            {keyList.map(x =>
            <DataTable.Row>
              <DataTable.Cell>{x}</DataTable.Cell>
              <DataTable.Cell>${subscriptions[x].cost}</DataTable.Cell>
              <DataTable.Cell>{subscriptions[x].dueDate}</DataTable.Cell>
            </DataTable.Row>
            // {subTotal = subTotal + subscriptions[x].cost}
            )}
          </DataTable>
          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffe',
      alignItems: 'center',
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
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: 15,
    },
});

const tableStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
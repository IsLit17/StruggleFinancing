import React, { Component, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Button, Alert, Keyboard, SafeAreaView, TextInput, ScrollView, TouchableWithoutFeedback} from "react-native";
import { DataTable } from 'react-native-paper';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function updateCap(total, itemCost, email){
  console.log('before in the db');
  let dbinfo = undefined;
  const docRef = doc(db, "users", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    dbinfo = docSnap.data()
    dbinfo.runningTotal = Number(total) + Number(itemCost)
    console.log('dbinfo', dbinfo.runningTotal)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  // dbinfo.runningTotal = Number(dbinfo.runningTotal) + Number(itemCost);
  await setDoc(doc(db, "users", email), dbinfo);

  console.log('stored in the db');
}

// About screen contains the text “You are on the about page” and a button.
export default function HomeScreen({navigation, route}) {
  const [subscriptions, setSubs] = React.useState({});
  const [spendCap, setSpendCap] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [ItemName, onChangeItem] = React.useState('');
  const [CostI, onChangeCostI] = React.useState('');
  const [DateHome, onChangeDateHome] = React.useState('');


  var keyList = null;
  (subscriptions != null ? keyList = Object.keys(subscriptions) : keyList = []);
  function NotifObj(name, days) {
    this.name = name;
    this.days = days;
  }
  const objList = [new NotifObj("Electric", 2), new NotifObj("Water", 3), new NotifObj("Gas", 4)]
  const notification = (cost) =>
    Alert.alert(
      "Alert",
      "Do you want to go through with this purchase?",
      [
        {
          text: "Yes",
          onPress: () => setTotal(Number(total) + Number(cost)),
          style: "cancel"
        },
        { text: "Dismiss", onPress: () => console.log("Dismiss Pressed") }
      ],
      { cancelable: false }
    );

    useEffect(() => {
      async function fetchData() {
        console.log('here')
        const docRef = doc(db, "users", route.params.email);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setSubs(docSnap.data().subscriptions)
          setSpendCap(docSnap.data().spendCap)
          setTotal(docSnap.data().runningTotal)

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      fetchData();
    }, [])
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style= {styles.greenTxt}>Struggle Financing</Text>
      <DataTable style={tableStyles.container}>
        <DataTable.Row style= {tableStyles.tableRow}>
          <DataTable.Cell>Monthly Spending Limit</DataTable.Cell>
          <DataTable.Cell>${spendCap}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Bills/Subscriptions/Extra</DataTable.Cell>
          <DataTable.Cell>${total}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Bread Left to Spend</DataTable.Cell>
          <DataTable.Cell>${spendCap - total}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <Text style = {{top: 1, fontSize: 30, textAlign: 'center'}}>What are you looking to buy?</Text>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{bottom: 30, flex: 1, margin: 10, padding: 20}}>
          <TextInput 
            style={textboxStyle.input}
            onChangeText={onChangeItem}
            value={ItemName}
            placeholder="Item Name"
          />
          <TextInput
            style={textboxStyle.input}
            onChangeText={onChangeCostI}
            value={CostI}
            placeholder="Cost of Item"
          />
          <TextInput
            style={textboxStyle.input}
            onChangeText={onChangeDateHome}
            value={DateHome}
            placeholder="Date purchased in xx/xx/xxxx format"
          />
        </View>
      </TouchableWithoutFeedback>

        <Text style={{bottom: 50, color: 'blue', textDecorationLine: 'underline'}}
          onPress={() => notification(CostI) && updateCap(total, CostI, route.params.email)}>
          Press to add to running total
        </Text>

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

// export default LoginScreen;
const textboxStyle = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    width: 280,
  },
});

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

const tableStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  tableRow: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
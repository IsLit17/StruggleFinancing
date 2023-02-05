import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, ActivityIndicator} from 'react-native'; // importing components
import { SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, db } from "./firebaseConfig";


async function storeFirebase(subName, cost, date, navigation, email) {
  console.log('before in the db');
  let dbinfo = undefined;
  let newSub = {
    cost: cost,
    duedate: date
  }
  const docRef = doc(db, "users", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    dbinfo = docSnap.data();
    dbinfo.subscription[subName] = newSub;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  await setDoc(doc(db, "users", email), dbinfo);

  console.log('stored in the db');
  navigation.navigate('Subs', {email: email})
}

// About screen contains the text “You are on the about page” and a button.
export default function SubPrompt({navigation, route}) {
    const [SubName, onChangeSub] = React.useState('');
    const [Cost, onChangeCost] = React.useState('');
    const [Due, onChangeDue] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style = {{top: 15, fontSize: 38, color: '#072'}}>Add Subscriptions</Text>
      <Text style = {{top: 15, fontSize: 18, color: '#072'}}>{route.params.email}</Text>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1, margin: 10, padding: 20}}>
          <TextInput 
            style={textboxStyle.input}
            onChangeText={onChangeSub}
            value={SubName}
            placeholder="Subscription Name"
          />
          <TextInput
            style={textboxStyle.input}
            onChangeText={onChangeCost}
            value={Cost}
            placeholder="Cost of subscription"
          />
          <TextInput
            style={textboxStyle.input}
            onChangeText={onChangeDue}
            value={Due}
            placeholder="Due date in xx/xx/xxxx format"
          />
        </View>
      </TouchableWithoutFeedback>   
      <Text style={{bottom: 300, color: 'blue', textDecorationLine: 'underline'}}
        onPress={() => storeFirebase(SubName, Cost, Due, navigation, route.params.email)}>
        Add Subscription
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
    },
  });

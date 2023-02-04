import React from 'react';
import { SafeAreaView, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const [email, onChangeEmail] = React.useState('');
  return (
    <View style={styles.container}>
      {/* <Text>LETS GET STRUGGLE FINANCING! - RizzGod</Text> */}
      {/* <SafeAreaView> */}
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
        />
      {/* </SafeAreaView> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Welcome'}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginScreen = ({navigation}) => {
  return (
    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

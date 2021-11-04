import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ForgotPassword from './components/forgotPassword';
import ResetPassword from './components/resetPassword';
import HomeScreen from './components/homeScreen';
import Loading from './components/loading';
import Login from './components/login';
import Profile from './components/profile';
import SignUp from './components/signup';
import Welcome from './components/welcome';

const Stack = createStackNavigator();

export default function App() {
  // if (!firebase.apps.length) {
  //   console.log('Connected with Firebase')
    // firebase.initializeApp(keys.firebaseConfig);
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="loading" component={Loading} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
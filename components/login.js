import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';
import { signIn } from '../services';
import { firebase } from '../config/firebaseConfig';
require('firebase/auth')

const login = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handlePress = () => {
      if (!email) {
         alert('Please enter your email.');
      }
      if (!password) {
         alert('Please enter your password.');
      }
      if (email && password) {
         signIn(email, password).then(() => {
            let user = firebase.auth().currentUser
            console.log(user.uid);
            if (user) {
               navigation.navigate('HomeScreen');
               setEmail('');
               setPassword('');
            }
         });
         
      };

   };
   return (
      <View style={styles.container}>
         <Image source={require('../assets/reactLogo.png')} style={styles.LogoImg} />
         <Text style={styles.TxtBoldWeight}>welcome Back</Text>
         <Text>Sign in to your account</Text>
         <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoCapitalize="none"
            value={email}
            onChangeText={(email) => setEmail(email)}
         />
         <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
         />
         <TouchableOpacity style={styles.BtnSignup} onPress={handlePress}>
            <Text style={styles.TxtColor}>Submit</Text>
         </TouchableOpacity>
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
   input: {
      margin: 5,
      height: 40,
      width: 240,
      borderColor: 'green',
      borderRadius: 10,
      borderWidth: 2,
   },
   BtnLogin: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 100,
   },
   BtnSignup: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'green',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 240,
   },
   BtnGoogle: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 240,
   },
   TxtColor: {
      color: 'white',
      fontSize: 20,
   },
   InlineBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   TxtBoldWeight: {
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 30,
   },
   LogoImg: {
      marginBottom: 50,
      height: 100,
      width: 100,
      borderColor: 'green',
      borderRadius: 75,
      borderWidth: 2,
   },
});

export default login
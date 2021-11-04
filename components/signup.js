import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';
import { registration } from '../services';

const signup = ({navigation}) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordconf, setPasswordconf] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');

   const handlePress = () => {
       if (!firstname) {
         alert('Please enter your first name.');
       }
       if (!email) {
         alert('Please enter your email.');
       }
       if (!password) {
         alert('Please enter your password.');
       }
       if (!passwordconf) {
         alert('Please confirm your password.');
       }
       if(firstname && email && password && passwordconf) {
         registration(email, password, lastname, firstname)
         navigation.navigate('HomeScreen');
         setFirstname('');
         setLastname('');
         setEmail('');
         setPassword('');
         setPasswordconf('');
       };

       
      
      
     };
      return (
         <View style = {styles.container}>
            <Image source = {require('../assets/reactLogo.png')} style={styles.LogoImg} />
            <Text style = {styles.TxtBoldWeight}>Create an account</Text>
            <TextInput
                style={styles.input}
                placeholder="First name*"
                autoCapitalize="none"
                value={firstname}
                onChangeText={(firstname) => setFirstname(firstname)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last name"
                autoCapitalize="none"
                value={lastname}
                onChangeText={(lastname) => setLastname(lastname)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your email*"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password*"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Retype your password to confirm*"
                value={passwordconf}
                onChangeText={(passwordconf) => setPasswordconf(passwordconf)}
                secureTextEntry={true}
            />
            <TouchableOpacity style = {styles.BtnSignup} onPress={handlePress}>
               <Text style = {styles.TxtColor}>Sign Up</Text>
            </TouchableOpacity>
            <Text>Already have an account?</Text>
            <TouchableOpacity style = {styles.BtnSignup} onPress = {() => navigation.navigate('Login')}>
               <Text style = {styles.TxtColor}>Sign In</Text>
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
      borderColor: 'lime',
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
      fontSize: 25,
      paddingBottom: 30,
      color: 'lime',
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

export default signup
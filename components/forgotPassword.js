//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';

// create a component
const forgotPassword = ({ navigation }) => {
   const [email, setEmail] = useState('')
const reset = () =>{
    resetPassword(email)
    setEmail('')
    alert("An email link has been sent to " + email + " to reset your password")
    navigation.navigate("Login")
}

    return (
       <View style={styles.container}>
          <Image source={require('../assets/reactLogo.png')} style={styles.LogoImg} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Forgot your password</Text>
          <Text style={styles.text}
          >Enter an email to reset your password</Text>

          <TextInput
             style={styles.formInput1}
             placeholder="Enter your email"
             autoCapitalize="none"
             value={email}
             onChangeText={(email) => setEmail(email)}
          />

          <TouchableOpacity style={styles.button1} onPress={reset}>
             <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

       </View>
    );
}; 

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    LogoImg: {
      marginBottom: 50,
      height: 100,
      width: 100,
      borderColor: 'green',
      borderRadius: 75,
      borderWidth: 2,
   },
    formInput1:{
        borderColor: 'lime',
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 3,
        margin:5,
    },
    button1: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'lime',
        height: 40,
        width: 260,
        borderColor: 'lime',
        borderWidth:2,
        margin:5,

    },
});


export default forgotPassword
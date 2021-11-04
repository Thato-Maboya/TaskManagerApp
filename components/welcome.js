import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';

const welcome = ({navigation}) => {
      return (
         <View style = {styles.container}>
            <Image source = {require('../assets/reactLogo.png')} style={styles.LogoImg} />
            <Text style = {styles.TxtBoldWeight}>welcome</Text>
            <View style = {styles.InlineBtns}>
               <TouchableOpacity style = {styles.BtnLogin} onPress = {() => navigation.navigate('Login')}>
                  <Text style = {styles.TxtColor}>Login</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {styles.BtnSignup} onPress = {() => navigation.navigate('SignUp')}>
                  <Text style = {styles.TxtColor}>Signup</Text>
               </TouchableOpacity>
            </View>
            <Text>OR</Text>
            <TouchableOpacity style = {styles.BtnGoogle} onPress = {() => navigation.navigate('Google')}>
               <Text style = {styles.TxtColor}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('ForgotPassword')}>
               <Text>Forgot Password</Text>
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
      width: 110,
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
      width: 110,
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

export default welcome
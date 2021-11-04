//import liraries
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { firebase } from '../config/firebaseConfig';
// import { signIn } from '../services';
require('firebase/auth')
// create a component
const loading = ({navigation}) => {
    useEffect(
        () => {
         firebase.auth().onAuthStateChanged((user) => {
           if (user) {
             navigation.replace('HomeScreen');
           } else {
             navigation.replace('Welcome');
           }
         });
       }
     );
    return (
        <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59DC3D',
    },
});

//make this component available to the app

export default loading
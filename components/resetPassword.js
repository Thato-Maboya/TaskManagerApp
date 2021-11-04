import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import {email} from './forgotPassword';
// create a component
const resetPassword = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image source={require('../assets/reactLogo.png')} style={styles.LogoImg} />
            <Text style={styles.text}>An reset link was been sent to your email</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
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

export default resetPassword;
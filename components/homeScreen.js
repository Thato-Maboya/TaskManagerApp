import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTasks, getUserInfo, getCompleteTasksCount, loggingOut,getIncompleteTasks, getCompleteTasks } from '../services';
import { Searchbar, IconButton } from 'react-native-paper';
import { getAdditionalUserInfo } from '@firebase/auth';
import "firebase/firestore";
import { firebase } from '../config/firebaseConfig';
//import { doc, updateDoc } from "firebase/firestore";
require('firebase/auth')

const homeScreen = ({ navigation }) => {

   const [searchQuery, setSearchQuery] = React.useState('');
   const onChangeSearch = query => setSearchQuery(query);

   const [task, setTask] = useState('');
   const [taskItems, setTaskItems] = useState([]);
   const [firstName, setFirstName] = useState([]);
   const currentUser = firebase.auth().currentUser;

   let list = []

   const addTask = () => {
      setTaskItems([...taskItems, task])
      setTask("")
      addTasks(task)
      fetchTasks()
   }

   const fetchTasks = async => {
      getCompleteTasks().then((data) => {
         list = data
         console.log(list);
         setTaskItems(list)
      })
   }

   const fetchUser= async => {
      getUserInfo().then((data) => {
         list = data
         console.log(list);
         setFirstName(list)
      })
   }

   useEffect(() => {
      fetchTasks()
      fetchUser()
      getCompleteTasks()
      getCompleteTasksCount()
   }, [])


   const handlePressTask = () => {
      if (!task) {
         alert('Please enter your task.');
      }
      else {
         addTasks(task)
         navigation.navigate('HomeScreen');
         setTask('');
      };
   }
    const handlePressProfile = () =>{
      navigation.navigate('Profile');
    }

    const handlePressComplete =(id) =>{
      getIncompleteTasks(id);
      navigation.navigate('HomeScreen');
    }

   return (
      <View>
         <View style={styles.container}>
            <IconButton
               icon="account"
               size={50}
               onPress={handlePressProfile}
            />
            {
               firstName.map((item, index) => {
                  return (
                     <View key={index}>
                        <Text style={styles.username}>Hello {item.firstname}</Text>
                     </View>
                  )
               })
            }
            
            <Searchbar style={styles.input}
               placeholder="Search"
               onChangeText={onChangeSearch}
               value={searchQuery}
            />
         </View>
         <View style={styles.containerAddTask}>
            <View style={styles.InlineBtns}>
               <TextInput
                  style={styles.inputTask}
                  placeholder="Enter your task"
                  autoCapitalize="none"
                  value={task}
                  onChangeText={(task) => setTask(task)}
               />
               <IconButton
                  style={styles.inputPlus}
                  icon="plus"
                  size={40}
                  onPress={handlePressTask}
               />
            </View>
            <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
               {
                  taskItems.map((item, index) => {
                     return (
                        <View key={index} style={styles.inputViewTask}>
                           {/* <TaskView text={item.task} status={'Complete'} /> */}
                           <Text >{'\u2B24'} {item.task}</Text>
                           <Text onPress={() => handlePressComplete(item.id)}>{item.status}</Text>
                        </View>
                     ) 
                  })
               }
            </ScrollView>
         </View>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
      height: 190,
   },
   containerAddTask: {
      backgroundColor: '#F4F4F4',
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
      paddingBottom: 10,
   },
   inputTask: {
      margin: 5,
      height: 40,
      width: 180,
      borderColor: 'green',
      borderRadius: 10,
      borderWidth: 2,
   },
   inputPlus: {
      margin: 5,
      height: 40,
      width: 50,
      borderColor: 'green',
      borderRadius: 10,
      borderWidth: 2,
   },
   inputViewTask: {
      margin: 5,
      height: 20,
      width: 240,
      borderColor: 'lime',
      borderRadius: 10,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      width: 150,
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
      width: 90,
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
   username: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
   },
   usernameCenter: {
      alignItems: 'center',
      justifyContent: 'center',
   }
});

export default homeScreen
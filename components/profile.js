import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTasks,getUserInfo, getCompleteTasksCount, getCompletedTasksCount, getTasks, loggingOut } from '../services';
import { Searchbar, IconButton } from 'react-native-paper';
import { getAdditionalUserInfo } from '@firebase/auth';
import "firebase/firestore";
import { firebase } from '../config/firebaseConfig';
require('firebase/auth')

const profile = ({ navigation }) => {

   const handlePress = () => {
      loggingOut().then(
         navigation.navigate('Welcome')
      )
   };

   const [task, setTask] = useState('');
   const [taskItems, setTaskItems] = useState([]);
   const [taskCItems, setTaskCItems] = useState([]);
   const [taskPItems, setTaskPItems] = useState([]);
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
      getTasks().then((data) => {
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

   const fetchCompleteTasksLength = async => {
      getCompleteTasksCount().then((data) => {
         list = data
         console.log(list);
         setTaskCItems(list)
      })
   }
   const fetchINCompleteTasksLength = async => {
      getCompletedTasksCount().then((data) => {
         list = data
         console.log(list);
         setTaskPItems(list)
      })
   }
   console.log(taskCItems);
   console.log(taskPItems);
   console.log(firstName);

   useEffect(() => {
      fetchTasks()
      fetchUser()
      fetchCompleteTasksLength()
      fetchINCompleteTasksLength()
   }, [])

  

   return (
      <View style={styles.container}>
         <View style={styles.InlineBtns}>
            <IconButton
               style={styles.BtnBack}
               icon="arrow-left"
               size={40}
               onPress={() => navigation.navigate('HomeScreen')}
            />
            <IconButton
               style={styles.BtnLogin}
               icon="power"
               size={40}
               onPress={handlePress}
            />
         </View>
         <View style={styles.containerInfo}>
            
            {
                  firstName.map((item, index) => {
                     return (
                        <View key={index} style={styles.usernameCenter}>
                           {/* <TaskView text={item.task} status={'Complete'} /> */}
                           <Text style={styles.username}> {item.firstname}</Text>
                           <Text>{item.email}</Text>
                        </View>
                     )
                  })
               }
            <IconButton
               icon="account"
               size={20}
            />
            <View style={styles.inputViewTask}>
               <Text>Task Completed </Text>
               <Text>Task In Progress</Text>
            </View>
            <View style={styles.ValueCountTask}>
               <Text>{taskPItems}</Text>
               <Text>{taskCItems} </Text>
            </View>
         </View>

         <View style={styles.containerAddTask}>
            <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
               {
                  taskItems.map((item, index) => {
                     return (
                        <View key={index} style={styles.inputViewTask}>
                           {/* <TaskView text={item.task} status={'Complete'} /> */}
                           <Text >{'\u2B24'} {item.task}</Text>
                           <Text>{item.status}</Text>
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
      backgroundColor: '#fff',
   },
   containerAddTask: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      justifyContent: 'center',
   },
   containerInfo: {
      flex: 1,
      backgroundColor: 'lime',
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
      width: 100,
      marginLeft: 20,
      marginTop: 30,
   },
   BtnBack: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'lime',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 100,
      marginLeft: 20,
      marginTop: 30,
   },
   InlineBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
   ValueCountTask: {
      margin: 5,
      height: 20,
      width: 180,
      borderColor: 'lime',
      borderRadius: 10,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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

export default profile
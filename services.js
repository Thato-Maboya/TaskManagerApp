import "firebase/firestore";
import { Alert } from "react-native";
// import * as firebase from "firebase/app";
import {firebase} from './config/firebaseConfig'
require('firebase/auth')

export async function registration(email, password, lastname, firstname) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
            email: currentUser.email,
            lastname: lastname,
            firstname: firstname,
        });
    } catch (error) {
        alert("There is something wrong!!!", error.message);
        console.log(error.message);
    }
}

export async function signIn(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        alert("There is something wrong!!!", error.message);
        console.log(error.message);
    }
}

export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        alert("There is something wrong!!!", error.message);
        console.log(error.message);
    }
}

export async function addTasks(task) {
    try {
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        
        db.collection("tasks").add({
            userID: currentUser.uid,
            task: task,
            status: 'complete',
        });
    } catch (error) {
        alert("There is something wrong while adding a task!!!", error.message);
        console.log(error.message);
    }
}

export async function getTasks() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid)

        let doc = await firebase.firestore().collection("tasks").where("userID", "==", currentUser?.uid).get()
        console.log(doc)
        if(doc){
            doc.forEach((docs) => {
                console.log(docs.id);
                let docID = docs.id
                dataObj.push({...docs.data(), ['id']: docID})
                console.log(dataObj)
                
            })
        } else{
            console.log("no record");
        }
    } catch (error) {
        alert("There is something wrong while getting the task!!!", error.message);
        console.log(error.message);
    }
    console.log(dataObj.length);
    return dataObj
}

export async function getUserInfo() {
    let dataObj = []
    const currentUser = firebase.auth().currentUser;
    let doc = await firebase.firestore().collection('users').doc(currentUser?.uid).get();
    
    dataObj.push({ ...doc.data() })
    console.log(dataObj);
    return dataObj

 }

export async function getCompleteTasks() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid)

        let doc = await firebase.firestore().collection("tasks").where("userID", "==", currentUser?.uid).where("status", "==", "complete").get()
        console.log(doc)
        if(doc){
            doc.forEach((docs) => {
                console.log(docs.id);
                let docID = docs.id
                dataObj.push({...docs.data(), ['id']: docID})
                console.log(dataObj)
            })
        } else{
            console.log("no record");
        }
    } catch (error) {
        alert("There is something wrong while getting the task!!!", error.message);
        console.log(error.message);
    }
    console.log(dataObj.length);
    return dataObj
}

export async function getIncompleteTasks(id) {
    console.log('Complete btn pressed')
    const currentUser = firebase.auth().currentUser;
    console.log(id)
    var washingtonRef = firebase.firestore().collection("tasks").doc(id);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        status: 'completed'
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}

export async function getCompleteTasksCount() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid)

        let doc = await firebase.firestore().collection("tasks").where("userID", "==", currentUser?.uid).where("status", "==", "complete").get()
        console.log(doc)
        if(doc){
            doc.forEach((docs) => {
                console.log(docs.id);
                let docID = docs.id
                dataObj.push({...docs.data(), ['id']: docID})
                console.log(dataObj)
            })
        } else{
            console.log("no record");
        }
    } catch (error) {
        alert("There is something wrong while getting the task!!!", error.message);
        console.log(error.message);
    }
    console.log(dataObj.length);
    return dataObj.length
}

export async function getCompletedTasksCount() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid)

        let doc = await firebase.firestore().collection("tasks").where("userID", "==", currentUser?.uid).where("status", "==", "completed").get()
        console.log(doc)
        if(doc){
            doc.forEach((docs) => {
                console.log(docs.id);
                let docID = docs.id
                dataObj.push({...docs.data(), ['id']: docID})
                console.log(dataObj)
            })
        } else{
            console.log("no record");
        }
    } catch (error) {
        alert("There is something wrong while getting the task!!!", error.message);
        console.log(error.message);
    }
    console.log(dataObj.length);
    return dataObj.length
}


export async function getUserDetails() {
    
}

export async function signInWithGoogle() {

}

export async function resetPassword(email) {
    try {
        //const user = firebase.auth().currentUser;

        firebase.auth().sendPasswordResetEmail(email).then(() => {
            // Password reset email sent
            console.log("Password reset email sent");


        })

            // console.log("rest button clicked")

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });

    } catch (error) {
        console.log(error.message)
    }
}

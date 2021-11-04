// import { firebase } from '@firebase/app'
// import * as firebase from s"firebase/app";
import firebase from 'firebase/compat'

const firebaseConfig = {
    apiKey: "AIzaSyC5nYoF-Z4G9OfzXKH-awZu6HXNQ86i3WU",
    authDomain: "task-manager-7cac9.firebaseapp.com",
    projectId: "task-manager-7cac9",
    storageBucket: "task-manager-7cac9.appspot.com",
    messagingSenderId: "648800701795",
    appId: "1:648800701795:web:d1db234d25c3bab2e75756"
  };
  
  firebase.initializeApp(firebaseConfig)

  export { firebase };
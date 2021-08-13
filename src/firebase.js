import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBglTosqQA7LrzMEoKZ5uPaeigRHqV18os",
    authDomain: "unichat-33c7e.firebaseapp.com",
    projectId: "unichat-33c7e",
    storageBucket: "unichat-33c7e.appspot.com",
    messagingSenderId: "413236965028",
    appId: "1:413236965028:web:7835d604f7d39278bfc031"
  }).auth();
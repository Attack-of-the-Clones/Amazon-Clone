import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwCK05Hel_DzdDaRGnZgwGvxQ7ze7M1fI",
  authDomain: "clone-a2782.firebaseapp.com",
  databaseURL: "https://clone-a2782.firebaseio.com",
  projectId: "clone-a2782",
  storageBucket: "clone-a2782.appspot.com",
  messagingSenderId: "566259188165",
  appId: "1:566259188165:web:b956f348052487bbe38bac",
  measurementId: "G-8DW2XBQ03S",
});

const auth = firebase.auth();

export { auth };

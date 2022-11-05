import firebase from "firebase";
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBFLWdmS_beHklLLUpZVXvpV4IVk4-Offc",
    authDomain: "english-86004.firebaseapp.com",
    projectId: "english-86004",
    storageBucket: "english-86004.appspot.com",
    messagingSenderId: "648298125938",
    appId: "1:648298125938:web:69f7a56bdb216a12c140eb",
    measurementId: "G-0LN294VLRS"
};
const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

export {db}

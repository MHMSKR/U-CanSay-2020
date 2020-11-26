// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0AwzOrNQhEB1j2jRr6vnJM7SnVCW4eLE",
    authDomain: "u-cansay-cloud-2020.firebaseapp.com",
    databaseURL: "https://u-cansay-cloud-2020.firebaseio.com",
    projectId: "u-cansay-cloud-2020",
    storageBucket: "u-cansay-cloud-2020.appspot.com",
    messagingSenderId: "305052646853",
    appId: "1:305052646853:web:4db47f9dfc4fdd9e749fac",
    measurementId: "G-G4LC76ZRQ3"
};
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()

export {
    auth,
    db,
    storage,
    firebase as
    default
}
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDf75gCNm0RQ9EuSKkvxHGzr5whxmoF4Hs",
    authDomain: "ingtara-4054e.firebaseapp.com",
    databaseURL: "https://ingtara-4054e.firebaseio.com",
    projectId: "ingtara-4054e",
    storageBucket: "ingtara-4054e.appspot.com",
    messagingSenderId: "693877067546"
};
const fire = firebase.initializeApp(config);
export default fire;
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
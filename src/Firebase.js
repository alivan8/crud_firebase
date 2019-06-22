import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCILDk2rPD-7t7efC-S6zl_xm5LKp8CPdI",
    authDomain: "web-firebase-crud-dbe05.firebaseapp.com",
    databaseURL: "https://web-firebase-crud-dbe05.firebaseio.com",
    projectId: "web-firebase-crud-dbe05",
    storageBucket: "web-firebase-crud-dbe05.appspot.com",
    messagingSenderId: "589738656468"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
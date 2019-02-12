import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAySZLurAbI-t0gFuyS0CJZzOR7lQN-p5Q",
    authDomain: "tgj-db.firebaseapp.com",
    databaseURL: "https://tgj-db.firebaseio.com",
    projectId: "tgj-db",
    storageBucket: "tgj-db.appspot.com",
    messagingSenderId: "95933339039"
  };

firebase.initializeApp(config);

export default firebase;
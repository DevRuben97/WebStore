import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Styles/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Initilize the firebase service:
const firebaseConfig = {
    apiKey: "AIzaSyASReFSsiuCB_zWE57de8vVwe7SxscQS8Q",
    authDomain: "webstore-7cec7.firebaseapp.com",
    databaseURL: "https://webstore-7cec7.firebaseio.com",
    projectId: "webstore-7cec7",
    storageBucket: "",
    messagingSenderId: "495192404076",
    appId: "1:495192404076:web:2fbbc231a1177f8201a849",
    measurementId: "G-7PBVTZW8V0"
  };

  firebase.initializeApp(firebaseConfig);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

// firebase.initializeApp({
//   apiKey: "AIzaSyCbWdx-54TULb80K3J5gHTSgw_ULgLwLUo",
//   authDomain: "hostel-booking-app-93b3f.firebaseapp.com",
//   projectId: "hostel-booking-app-93b3f",
//   storageBucket: "hostel-booking-app-93b3f.appspot.com",
//   messagingSenderId: "1035179747656",
//   appId: "1:1035179747656:web:2f25094aec5ccf50c36b7d",
//   measurementId: "G-TH0Y3YRDBC"
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

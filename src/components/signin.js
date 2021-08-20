import React, { useEffect, useState } from 'react';
import "./signin.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import HostelTypeSelection from "./hostelTypeSelection/hostelTypeSelection";

firebase.initializeApp({
    apiKey: "AIzaSyCbWdx-54TULb80K3J5gHTSgw_ULgLwLUo",
    authDomain: "hostel-booking-app-93b3f.firebaseapp.com",
    projectId: "hostel-booking-app-93b3f",
    storageBucket: "hostel-booking-app-93b3f.appspot.com",
    messagingSenderId: "1035179747656",
    appId: "1:1035179747656:web:2f25094aec5ccf50c36b7d",
    measurementId: "G-TH0Y3YRDBC"
  });

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };
  
  function Header(){
    return (
      <div className = "header"> 
        <h3>Hostel Allocation</h3>
        <p className="name">{firebase.auth().currentUser.displayName}</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
    );
  }

  

  function SignInScreen() {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setIsSignedIn(!!user);
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    let user_Stored_Data = JSON.parse(localStorage.getItem("user-date"));

    function removeHistory(){
      localStorage.removeItem("user-date");
      user_Stored_Data ={};
      setReminderVisible(reminderVisible = true);

    }

    function Reminder(){
      return (
        <div className="reminder-box">
          <h1>WELCOME {firebase.auth().currentUser.displayName}</h1>
          <p>You have already booked a room.</p>
          <ul className="remider-list">
            Yous room details are as follows:
            <li key ="hNum">Hostel Number : {user_Stored_Data.hostel_num}</li>
            <li key="rNum">Room Number : {user_Stored_Data.room_num}</li>
          </ul>
          <button className="reminder-btn" onClick ={removeHistory}>Try Again</button>
        </div>
      );
    }

    let [reminderVisible , setReminderVisible] = useState(true);

    useEffect(()=>{
      JSON.parse(localStorage.getItem("user-date")) ? setReminderVisible(reminderVisible = false) : setReminderVisible(reminderVisible = true) ;
    },([reminderVisible]));

    if (!isSignedIn) {
      return (
          <div className="container">
            <div className="box">
                <h1>Hostel Allocation</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          </div>
        
      );
    }
    return (
      <>
      <Header/>
      {reminderVisible ? <HostelTypeSelection/> : <Reminder/>}
      </>
    );
  }
  
  export default SignInScreen;


        // <div>
      //   <h1>Hostel Allocation</h1>
      //   <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      //   <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      // </div>
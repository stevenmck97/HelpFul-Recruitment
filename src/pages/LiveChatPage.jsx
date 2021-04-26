import React from 'react';

import '../App.css';
import '../assets/css/bootstrap.min.css'
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Hooks
import { useAuthState} from '../hooks';
// Components
import Channel from '../components/Channel.jsx';



firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
});


function LiveChatApp() {
  const { user } = useAuthState(firebase.auth());

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    // if (initializing) {
    //   return (
    //     <div>
    //       <Loader size="lg" />
    //     </div>
    //   );
    // }

    if (user) return <Channel user={user} />;

    return (
      <div className="App">
        <div className="container">
          <h2 className="mb-2 text-3xl flex items-center">
            Helpful Recruitment Live Chat
          </h2>
          <p className="mb-8 text-lg text-center">
            Chat with other jobseekers in Ireland!
          </p>
          <button
            onClick={signInWithGoogle}
            className="sign-in"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="page-section">
      <header>
        
        <div>
          {user ? (
            <button
              onClick={signOut}
              className="sign-out"
            >
              Sign out
            </button>
          ) : null}
        </div>
      </header>
      <main
        className="container"
        // style={{backgroundColor: "#242424" }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default LiveChatApp;

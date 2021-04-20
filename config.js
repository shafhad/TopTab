import * as firebase from 'firebase';

require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
   /* apiKey: "AIzaSyBWnfZSTUdHdTkZgauLaP3M9woWABF0tvM",
    authDomain: "newsly-77515.firebaseapp.com",
    projectId: "newsly-77515",
    storageBucket: "newsly-77515.appspot.com",
    messagingSenderId: "897785673155",
    appId: "1:897785673155:web:18c9927fd516768d153976"*/

    apiKey: "AIzaSyCyuPH46PquxafR0UA3d_BXFGsbpbvyI_w",
    authDomain: "multiplayerproj-71bfe.firebaseapp.com",
    databaseURL: "https://multiplayerproj-71bfe.firebaseio.com",
    projectId: "multiplayerproj-71bfe",
    storageBucket: "multiplayerproj-71bfe.appspot.com",
    messagingSenderId: "29527568001",
    appId: "1:29527568001:web:bdeda424e0ae58468ca780"
  };
//@
  // Initialize Firebase

   firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

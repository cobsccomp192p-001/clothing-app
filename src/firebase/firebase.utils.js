import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const config ={
    apiKey: "AIzaSyBHXmvXbj2uzBpnhueNoYkOeSx8aCjTb4w",
  authDomain: "clothing-app-c7fd4.firebaseapp.com",
  projectId: "clothing-app-c7fd4",
  storageBucket: "clothing-app-c7fd4.appspot.com",
  messagingSenderId: "409190892532",
  appId: "1:409190892532:web:442ee22cb5c2d7fc346fa1"
}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
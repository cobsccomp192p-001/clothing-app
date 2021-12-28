import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBHXmvXbj2uzBpnhueNoYkOeSx8aCjTb4w",
  authDomain: "clothing-app-c7fd4.firebaseapp.com",
  projectId: "clothing-app-c7fd4",
  storageBucket: "clothing-app-c7fd4.appspot.com",
  messagingSenderId: "409190892532",
  appId: "1:409190892532:web:442ee22cb5c2d7fc346fa1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

//to add collection as a batch to the firestore
export const addCollectionDocs = async (collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey)

    const batch =firestore.batch();
    objectsToAdd.forEach(obj=>{
      const newDocRef=collectionRef.doc();
      batch.set(newDocRef,obj)
    })

    return await batch.commit();

}

export const collectionSnapshotToObject = (collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const {title,items}=doc.data();

    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items

    }

  });

  return transformedCollection.reduce((accumalator,collection)=>{
    accumalator[collection.title.toLowerCase()]=collection;
    return accumalator
  },{});
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

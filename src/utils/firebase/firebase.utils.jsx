import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGPlLV6WwdvsCuPPSSrJMZaXZhRtWgY-E",
  authDomain: "crwn-clothing-db-f4b21.firebaseapp.com",
  projectId: "crwn-clothing-db-f4b21",
  storageBucket: "crwn-clothing-db-f4b21.appspot.com",
  messagingSenderId: "436763517601",
  appId: "1:436763517601:web:871e47e79ee119c476c6e0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// In order to use the authentication we need to first initialize a provider

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef =doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}

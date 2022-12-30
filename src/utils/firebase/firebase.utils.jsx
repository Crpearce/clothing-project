import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
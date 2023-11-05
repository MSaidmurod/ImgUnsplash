import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAzxg6vClZpL_qDutpK3EhPETeLGmT-nZc",
  authDomain: "unsplash-d8066.firebaseapp.com",
  projectId: "unsplash-d8066",
  storageBucket: "unsplash-d8066.appspot.com",
  messagingSenderId: "1067552790891",
  appId: "1:1067552790891:web:7aca48a7365e9cd2c1142e",
  measurementId: "G-L22SG39F2H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const provider = new GoogleAuthProvider()

export const auth = getAuth()

export const singUpLoginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result
    } catch (error) {
        return error
    }
}

export const logout = () => {
    signOut(auth)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
}
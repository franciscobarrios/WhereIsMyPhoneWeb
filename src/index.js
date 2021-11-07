import _ from 'lodash';

import {
    initializeApp
} from 'firebase/app';
import {
    getAnalytics
} from "firebase/analytics";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import {
    signUpEmailPassword
} from './register_login/signUpEmailPassword';
import {
    signInEmailAndPassword
} from './register_login/signInEmailAndPassword';
import {
    signOutUser
} from './register_login/signOutUser';

const firebaseConfig = {
    apiKey: "AIzaSyBkMV4zCEMkVF_Lvy-5AcIfnHIaLx4GAtA",
    authDomain: "where-is-my-phone-connectiq.firebaseapp.com",
    databaseURL: "https://where-is-my-phone-connectiq-default-rtdb.firebaseio.com",
    projectId: "where-is-my-phone-connectiq",
    storageBucket: "where-is-my-phone-connectiq.appspot.com",
    messagingSenderId: "83556040747",
    appId: "1:83556040747:web:bcfd44831ef774fc0f6a6e",
    measurementId: "G-8GJSNBC67H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

window.onload = function () {
    initApp();
};

function initApp() {
    document.getElementById('signup-email-password').addEventListener('click', signUpEmailPassword, false);
    document.getElementById('signin-email-password').addEventListener('click', signInEmailAndPassword, false);
    document.getElementById('google-signin').addEventListener('click', signInWithGoogle, false);
    document.getElementById('signout').addEventListener('click', signOutUser, false);
}
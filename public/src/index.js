import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

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
const auth = getAuth(app);

function initApp() {
    document.getElementById('create-user').addEventListener('click', createUser, false);
}

function createUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {

            console.log('userCreadential >>>>>>> ', userCreadential);

            console.log('userCreadential >>>>>>> ', userCreadential['user']['uid']);

            userCreadential.user.getUid()
                .then((uid) => {
                    console.log('uid >>>>>>> ', uid);
                })
                .catch((error) => {
                    console.log('error >>>>>>> ', error);
                });
        }).catch((error) => {
            console.log('error >>>>>>> ', error);
        });
}

window.onload = function () {
    initApp();
};
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../index';

export function signUpEmailPassword() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {

            console.log('userCreadential >>>>>>> ', userCreadential['user']['uid']);

        }).catch((error) => {
            console.log('error >>>>>>> ', error);
        });
}

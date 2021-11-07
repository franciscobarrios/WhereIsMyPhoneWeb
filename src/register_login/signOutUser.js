import { signOut } from "firebase/auth";
import { auth } from '../index';

export function signOutUser() {
    signOut(auth)
        .then(() => {
            console.log('signOut >>>>>>> ');
        }).catch((error) => {
            console.log('error >>>>>>> ', error);
        });
}

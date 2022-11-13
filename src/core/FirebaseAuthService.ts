import {Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential, signOut} from "firebase/auth"
import { useFirebaseApp } from "solid-firebase";

interface UsernamePassword { username: string, password: string };

//-----------
// Private functions
// ----------

/**
 * Gets the auth object from firebase
 * @returns auth object 
 */
function _getAuth(): Auth {
    return getAuth(useFirebaseApp())
}

/**
 * Sign up users with a username and password
 * @param props username and password
 * @returns user credential
 */
export function signUp(props: UsernamePassword): Promise<UserCredential> {
    return createUserWithEmailAndPassword(_getAuth(), props.username, props.password);
}

/**
 * Sign in with a username and password
 * @param props username and props
 * @returns user credential
 */
export function logInEmailAndPassword(props: UsernamePassword) {
    return signInWithEmailAndPassword(_getAuth(), props.username, props.password);
}

/**
 * Signs out a user with firebase.
 */
export function logOut(): void {
    signOut(_getAuth());
}
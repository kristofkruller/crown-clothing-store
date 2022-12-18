// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-an-Hpe_wYKEPkX3OpVB8Gb9BBWw0tf4",
    authDomain: "crownclothingdb-b14d0.firebaseapp.com",
    projectId: "crownclothingdb-b14d0",
    storageBucket: "crownclothingdb-b14d0.appspot.com",
    messagingSenderId: "727083869679",
    appId: "1:727083869679:web:b2665ee74e52ea1512021a"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

// the custom sign in escalation
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// firestore
export const db = getFirestore();
// takes the user as userAuth, and takes the displayName at signup as additionalVal to replace null
export const authDocument = async (userAuth, additionalVal = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        //destruct from user
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalVal
            });
        } catch (error) {
            console.error('Creating user failed',error);
        }
    }
}

export const authWithEmailPass = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword( auth, email, password );
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Category } from "../redux/categories/category-type";
import { UserType } from "../redux/user/user-type";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore"

import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged, 
  User,
  NextOrObserver
} from "firebase/auth";

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

// FIRESTORE

export const db = getFirestore();

export type ObjectToAdd = {
  title: string
} 

export const addCollectionsAndDocs = async <T extends ObjectToAdd> (
    collectionKey: string, 
    objToAdd: T[]
  ): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
}

export const getCatAndDocs = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const qSnapShot = await getDocs(q);

  return qSnapShot.docs.map(doc =>
    doc.data() as Category
  );

}

// takes the user as userAuth, and takes the displayName at signup as additionalVal to replace null

export type AdditionalInfo = {
  displayName?: string
}

export const authDocument = async (
    userAuth: User, 
    additionalVal = {} as AdditionalInfo
  ): Promise<void | QueryDocumentSnapshot<UserType>> => 
{
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
      console.error('Creating user failed', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserType>;
}

export const authWithEmailPass = async (email: string, password: string) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword( auth, email, password );
}

export const signInWithEmailPass = async ( email: string, password:string ) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword( auth, email, password );
}

export const signOutUser = () => signOut(auth);
export const authStateObserver = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      }
    )
  })
}
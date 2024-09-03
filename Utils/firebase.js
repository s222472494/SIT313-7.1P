import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword as signInWithEmail } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoo_RFONC6HJ-zT1U8lB3AR6vxzMA2Uwo",
    authDomain: "sit315-7p.firebaseapp.com",
    projectId: "sit315-7p",
    storageBucket: "sit315-7p.appspot.com",
    messagingSenderId: "786940609137",
    appId: "1:786940609137:web:62f2618f20703e8b9b91d0",
    measurementId: "G-R08DDTHFPB"
};


const firebaseApp = initializeApp(firebaseConfig);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

// Firebase Auth and Firestore
export const auth = getAuth();
export const db = getFirestore();

// Google Sign-In
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Create User Document in Firestore
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.error('Error creating user document:', error.message);
        }
    }

    return userDocRef;
};

// Create Auth User with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign In with Email and Password
export const signInWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmail(auth, email, password);
};

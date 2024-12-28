import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 
import { router } from "expo-router";

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed up 
return userCredential;

// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
});

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed up 
    return userCredential;
    
    // ...
    })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});

const email = "";
const password = "";

const signup = async (firstName, lastName, email, password) => {
    try{
        console.log(auth);

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
        });

        router.replace('/(home)')
    }
    catch (error) {
        console.log(error);
    }
}

const signin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        router.replace('/(home)')
    }
    catch (error) {
        console.log("sign in error");
    }
}

/*const onUserUpdate = () => {
    const user = auth.currentUser;

    if(user !== null)
    {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;

    }
}*/

export{ signin, signup }
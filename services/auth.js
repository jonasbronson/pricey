import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from "./firebaseConfig";

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
const uid = "";

const signup = async (email, password) => {
    try{
        console.log(auth);

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        console.log("user registered");
    }
    catch (error) {
        console.log("sign up error");
        return error;
    }
}

const signin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:" , user)
    }
    catch (error) {
        console.log("sign in error");
    }
}

export{ signin, signup }
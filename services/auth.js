import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

const email = "";
const password = "";

export const signup = async (email, password) => {
    try{
        console.log(auth);

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        console.log("user registered");
    }
    catch (error) {
        console.log("hello");
        return error;
    }
}
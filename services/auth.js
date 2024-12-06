import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

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
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        const user = userCredential.user;

        console.log("user registered");
    }
    catch (error) {
        return error;
    }
}
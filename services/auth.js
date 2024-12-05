import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed up 
const user = userCredential.user;
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
});

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
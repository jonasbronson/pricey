import {getAuth, signOut} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "./firebaseConfig";

const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      // Optionally redirect the user to the login page or perform other actions
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

const addUserToDatabase = async (user) => {
  try{
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
    });
  }
  catch (error) {
    console.log(error);
    console.log(user.uid);
  }
}
  
  export {handleSignOut, addUserToDatabase};
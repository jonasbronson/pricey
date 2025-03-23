import {getAuth, signOut} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from "./firebaseConfig";
import { auth } from '../services/firebaseConfig';
import { router } from "expo-router";

const addMethodToDatabase = async (paymentName, paymentType) => {

    try{
            // def want to change what the 'paymentName' aka name it is stored under
        await setDoc(doc(db, 'users', auth.currentUser.uid, 'methods', paymentName), {
            paymentName: paymentName,
            paymentType: paymentType,
        });

        router.replace('/(home)')
    }
    catch (error) {
        console.log(error);
    }

}

export{addMethodToDatabase};
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from "./firebaseConfig";
import { auth } from '../services/firebaseConfig';
import { router } from "expo-router";

const getPaymentMethods = async () => {

    try{
        const querySnapshot = await getDocs(collection(db, "users", auth.currentUser.uid, "methods"));

        let data = [];
        let value = 1;

        querySnapshot.forEach((doc) => {
            data.push({label: doc.id, value: value});
            value++;
        });
    }
    catch(error){
        console.log(error);
    }
    
    return data;

} 

export{getPaymentMethods};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Load environment variables from .env file

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "pricey-7488a.firebaseapp.com",
    projectId: "pricey-7488a",
    storageBucket: "pricey-7488a.firebasestorage.app",
    /* I have no idea why this doesn't work, but as of now, I don't need it for the app to function :)
    messagingSenderId: EXPO_PUBLIC_MESSAGING_SENDER_ID,
    appId: EXPO_PUBLIC_APP_ID,
    measurementId: EXPO_PUBLIC_MEASUREMENT_ID,
    */
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  export { app, auth };
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signup } from "../../services/auth";
import { auth } from '../../services/firebaseConfig';
import { onAuthStateChanged, signOut, getAuth, User} from 'firebase/auth';
import { handleSignOut, addUserToDatabase } from "../../services/firebaseFunctions";


export default function Index() {

  const styles = StyleSheet.create({
    input: {
      color: "white",
      borderWidth: 1,
      height: 40,
      padding: 10,
      margin: 12,
    },
    text: {
      fontFamily: "Oranienbaum",
    },
    signup: {
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  })

  const [uid, onChangeUID] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [user, onChangeUser] = React.useState<User | null>(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      onChangeUID(user.uid);
      onChangeEmail(user.email ? user.email : '');
      onChangeUser(user);
      // ... other user data

      console.log("User is signed in:", user);
    } else {
      // User is signed out
      console.log("User is signed out");
    }
  });

  // Cleanup subscription on unmount
  return () => unsubscribe();
}, []); // Empty dependency array means this effect runs once on mount
    

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Hello, welcome to</Text>
        <Text style={styles.text}>Pricey</Text>
        <Text>{uid}</Text>
        <Button title="Sign Out" onPress={handleSignOut}></Button>
        <Button title="Add to database" onPress={() => addUserToDatabase(user)}></Button>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

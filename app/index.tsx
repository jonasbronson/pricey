import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
      fontFamily: "Rubik",
      fontWeight: 600,
    }
  })

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const auth = getAuth();

  const createAccount = () => createUserWithEmailAndPassword(auth, email, password)

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

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Hello, welcome to</Text>
        <Text style={styles.text}>Pricey</Text>

        <TextInput placeholder="username" style={styles.input}/>
        <TextInput placeholder="password" style={styles.input}/>
        <Pressable onPress={createAccount}>
          <Text>Sign Up</Text>
        </Pressable>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

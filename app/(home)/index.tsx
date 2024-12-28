import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signup } from "../../services/auth";
import { addUserToDatabase } from "../../services/firebaseFunctions";
import { Link, router } from "expo-router";
import { auth } from "@/services/firebaseConfig";


export default function Index() {

  const styles = StyleSheet.create({
    header: {
      fontFamily: "Oranienbaum",
    },
    signup: {
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace('/(user)/signinscreen');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.header}>Hello, welcome to</Text>
        <Text style={styles.header}>Pricey</Text>
        <Text>hello</Text>
        <Pressable onPress={() => addUserToDatabase(auth.currentUser)}>
          <Text>Add to database</Text>
        </Pressable>
        <Link href='/(user)/account' asChild>
          <Pressable>
            <Text>See user</Text>
          </Pressable>
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

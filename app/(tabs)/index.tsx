import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signup } from "../../services/auth";
import { addUserToDatabase } from "../../services/firebaseFunctions";
import { Link } from "expo-router";


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

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Hello, welcome to</Text>
        <Text style={styles.text}>Pricey</Text>
        <Text>hello</Text>
        {/* <Pressable onPress={() => addUserToDatabase(user)}>
          <Text>Add to database</Text>
        </Pressable> */}
        <Link href='/(user)/account' asChild>
          <Pressable>
            <Text>See user</Text>
          </Pressable>
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signup } from "../services/auth"


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
    },
    signup: {
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  })

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Hello, welcome to</Text>
        <Text style={styles.text}>Pricey</Text>

        <TextInput placeholder="email" style={styles.input} value={email} onChangeText={onChangeEmail}/>
        <TextInput placeholder="password" style={styles.input} value={password} onChangeText={onChangePassword}/>
        <Button title="Sign Up" onPress={() => signup(email, password)} />

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

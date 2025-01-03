import React from "react";
import { Link } from 'expo-router';
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signin } from "../../services/auth";


export default function Index() {

  const styles = StyleSheet.create({
    input: {
      color: "black",
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

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Sign in to</Text>
        <Text style={styles.text}>Pricey</Text>

        <TextInput placeholder="email" style={styles.input} value={email} onChangeText={onChangeEmail} autoCapitalize="none"/>
        <TextInput placeholder="password" style={styles.input} value={password} onChangeText={onChangePassword} autoCapitalize="none"/>

        <Text>Don't have an account?</Text><Link href='/(user)/registerscreen'>Sign up.</Link>

        <Button title="Sign In" onPress={() => signin(email, password)} />

        <Text></Text>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

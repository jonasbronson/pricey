import React from "react";
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import {useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signup } from "../../services/auth";


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

  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.text}>Sign up to get access to</Text>
        <Text style={styles.text}>Pricey</Text>

        <TextInput placeholder="first name" style={styles.input} value={firstName} onChangeText={onChangeFirstName}/>
        <TextInput placeholder="last name" style={styles.input} value={lastName} onChangeText={onChangeLastName}/>
        <TextInput placeholder="email" style={styles.input} value={email} onChangeText={onChangeEmail} autoCapitalize="none"/>
        <TextInput placeholder="password" style={styles.input} value={password} onChangeText={onChangePassword} autoCapitalize="none"/>
        <Button title="Sign Up" onPress={() => signup(firstName, lastName, email, password)} />

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

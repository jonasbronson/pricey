import React, { useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from 'expo-router';
import { handleSignOut } from "../../services/firebaseFunctions";
import { auth } from '../../services/firebaseConfig';

export default function Index() {  
    return (
        <SafeAreaProvider>
          <SafeAreaView>
            <Pressable onPress={router.back}><Text>Back</Text></Pressable>
            <Text>Email: {auth.currentUser ? auth.currentUser.email : "Error getting email."}</Text>
            <Link href='/(home)'>Back to home</Link>

            <Pressable onPress={handleSignOut}>
              <Text>Sign Out</Text>
            </Pressable>
            <Pressable onPress={handleSignOut}>
              <Text>Delete my account</Text>
            </Pressable>
          </SafeAreaView>
        </SafeAreaProvider>
    
      );
}
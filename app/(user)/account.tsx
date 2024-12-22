import React, { useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import { handleSignOut } from "../../services/firebaseFunctions";
import { auth } from '../../services/firebaseConfig';

export default function Index() {  
    return (
        <SafeAreaProvider>
          <SafeAreaView>
            <Text>Email: {auth.currentUser ? auth.currentUser.email : "Error getting email."}</Text>
            <Link href='/(tabs)'>Back to home</Link>

            <Pressable onPress={handleSignOut}>
              <Text>Sign Out</Text>
            </Pressable>
          </SafeAreaView>
        </SafeAreaProvider>
    
      );
}
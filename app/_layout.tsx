import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { onAuthStateChanged, signOut, getAuth, User} from 'firebase/auth';
import { auth } from '../services/firebaseConfig';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [user, onChangeUser] = React.useState<User | null>(null);

  const [loaded] = useFonts({
    Oranienbaum: require('../assets/fonts/Oranienbaum-Regular.ttf'),
    Lexend: require('../assets/fonts/Lexend-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}


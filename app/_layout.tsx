import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Rubik: require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}


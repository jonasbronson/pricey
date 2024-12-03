import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import React from 'react';

export default function RootLayout() {
  const [loaded] = useFonts({
    Rubik: require('../assets/fonts/Rubik-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}


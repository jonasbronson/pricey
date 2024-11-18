import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React = require("react");
import { Text, View } from "react-native";
import {useState, useEffect} from 'react';

export default function Index() {

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type="default">Edit app/index.tsx to edit this screen.</ThemedText>
      <ThemedText type="subtitle">Jonas.</ThemedText>
    </ThemedView>
  );
}

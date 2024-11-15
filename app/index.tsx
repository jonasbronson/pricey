import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React = require("react");
import { Text, View } from "react-native";
import * as SQLite from 'react-native-sqlite-storage';
import {useState, useEffect} from 'react';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    createFromLocation: 1,
  },
  () => {},
  error => { console.log(error) }
);

export default function Index() {

  /*const db = SQLite.openDatabaseAsync('local.db');
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS Entry (EntryID INTEGER PRIMARY KEY AUTOINCREMENT, Amount REAL, EntryDate TEXT, IsPurchase TEXT);');
  });



}, []);*/

  useEffect(() => {
    createTable();
    newEntry();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS Entry (EntryID INTEGER PRIMARY KEY AUTOINCREMENT, Amount REAL, EntryDate TEXT, IsPurchase TEXT);');
    });
  }

  const newEntry = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Entry (Amount, EntryDate, IsPurchase) VALUES (?,?,?)', [10.00, '2021-10-01', 'true']);
    });
  }

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

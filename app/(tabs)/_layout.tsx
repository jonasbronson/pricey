import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

import { app } from '../../services/firebaseConfig';
import { getAuth } from "firebase/auth";

export default function TabLayout() {

  const auth = getAuth(app);

  return (
    <Tabs>
      
    </Tabs>
  );
}
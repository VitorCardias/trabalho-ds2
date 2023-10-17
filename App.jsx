import { Routes } from "./src/routes"
import React from 'react';
import {StatusBar} from 'react-native';

import AuthProvider from './src/contexts/auth';

export default function App() {
 
  return (
    <>
      <AuthProvider>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </>
  );
}

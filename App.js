import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
   <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor='#0C0C0C' barStyle='light-content' />
   </NavigationContainer>
  )
}
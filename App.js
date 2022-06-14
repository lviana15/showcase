import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import Detail from './src/pages/Detail';

export default function App() {
  return (
   <NavigationContainer>
      <SafeAreaView style={styles.container}>
         <Detail />
         <StatusBar backgroundColor='#0C0C0C' barStyle='light-content' />
      </SafeAreaView>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#0C0C0C',
   }
});

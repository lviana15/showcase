import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar backgroundColor='#0C0C0C' barStyle='light-content' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#0C0C0C',
   }
});

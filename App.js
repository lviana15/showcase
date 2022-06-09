import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import { List, MagnifyingGlass } from 'phosphor-react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity style={styles.icon}>
            <List name='menu' size={32} color='#404354'/>
         </TouchableOpacity>

         <Text style={styles.title}>
            Showcase
         </Text>

         <TouchableOpacity style={styles.icon}>
            <MagnifyingGlass name='search' size={32} color="#404354" />
         </TouchableOpacity>
      </View>

      <View style={styles.main}>
         <Text>Hello World</Text>
      </View>
      <StatusBar backgroundColor="#B8BECC" barStyle="light-content"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#404354',
   },
   header: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      height: 64,
      padding: 8,
      marginTop: 24,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#B8BECC'
   },
   main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   icon:{
      marginHorizontal: 6
   },
   title:{
      fontWeight: 'bold',
      color: '#FF3CD3',
      fontSize: 32
   }
});

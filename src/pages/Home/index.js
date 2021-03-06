import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, TextInput, Dimensions } from 'react-native';

import { FadersHorizontal, MagnifyingGlass } from 'phosphor-react-native';
import ShowcaseItem from '../../components/ShowcaseItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const DATA = [
   {
      id: 1,
      weaponName: 'AK-47',
      skinName: 'Asiimov'
   },
   {
      id: 2,
      weaponName: 'AWP',
      skinName: 'Hype-Beast'
   },
   {
      id: 3,
      weaponName: 'M4A4',
      skinName: 'Howl'
   }
]

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
         <MagnifyingGlass weitgh='thin' size={32} color='#000000'/>
         <TextInput style={styles.searchInput}/>
      </View>
      <View style={styles.main}>
      <Text style={styles.title}>AK-47</Text>
         <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={DATA}
            keyExtractor={ (item) => String(item.id) }
            renderItem={ ({ item }) => <ShowcaseItem data={item} />}
         />
      </View>

      <TouchableOpacity style={styles.filterButton}>
            <FadersHorizontal size={32} color='#F5B819'/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#0C0C0C'
   },
   searchBar: {
      width: '80%',
      height: 50,
      backgroundColor: '#202020',
      borderRadius: 25,
      padding: 12,
      marginTop: 32,
      marginHorizontal: 40,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
   },
   searchInput:{
      flex: 1,
      marginLeft: 8
   },
   title:{
      fontSize: 32,
      color: '#FFF',
      marginTop: 12
   },
   main: {
      flex: 1,
      alignItems: 'center',
   },
   filterButton:{
      height: 50,
      width: 50,
      position: 'absolute',
      right: 24,
      bottom: getBottomSpace() + 24,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#202020',
      padding: 12
   }
});

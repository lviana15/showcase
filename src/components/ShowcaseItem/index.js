import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ShowcaseItem({ weaponName, skinName }) {
   return (
      <TouchableOpacity>
         <View style={styles.container}>
            <Text style={styles.title}>
               {weaponName}
               {skinName}
            </Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container:{
      height: 165,
      width: 165,
      backgroundColor: '#202020',
      marginTop: 24,
      marginHorizontal: 6,
      justifyContent: 'space-around',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#1C1919',
      shadowOpacity: '30%',
      shadowOffset: 4,
   }
})
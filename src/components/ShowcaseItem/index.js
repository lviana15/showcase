import { StyleSheet, View, Text } from 'react-native';

export default function ShowcaseItem({ weapon, skinName }) {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            {weapon}
            {skinName}
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container:{
      height: 32,
      backgroundColor: '#B8BECC'
   }
})
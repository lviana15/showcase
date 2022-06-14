import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";


export default function Detail(){
   return(
      <SafeAreaView style={styles.container}>
         <View style={styles.content}>
            <Text style={styles.title}>AK-47 | Frontside Misty</Text>

            <View style={styles.item}>
               <Image
                  style={styles.skin}
                  source={{ uri: 'https://csgostash.com/storage/img/skin_sideview/s654.png?id=9cb575f5640b63b1de8f' }}
               />
            </View>
         </View>
         
         <View style={styles.category}>
            <Text style={styles.description}>Classified Rifle</Text>
         </View>
         
         <View style={styles.stattrak}>
          <Text style={styles.description}>StatTrak Available</Text>
         </View>

         <View style={styles.collections}>
            <View style={styles.collection}>
               <Image
                  style={styles.case}
                  source={{ uri: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FF4u1qubIW4Su4mzxYHbzqGtZ-KGlz8EuJcg3rnE9NiijVe3_UY-Zzr2JJjVLFEEeiQRtg/256fx256f' }}
               />
               <Text style={styles.collectionText}>
                  Shadow Case
               </Text>
            </View>


            <View style={styles.collection}>
               <Image
                  style={styles.case}
                  source={{ uri: 'https://csgostash.com/img/collections/256x198/the_shadow_collection.png?id=4208d1b69583f7ee5a18' }}
               />
               <Text style={styles.collectionText}>
                  The Shadow Collection
               </Text>
            </View>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#0C0C0C',
      alignItems: 'center'
   },
   content: {
      alignItems: 'center',
      marginTop: 12 
   },
   title:{
      marginLeft: 12,
      fontSize: 24,
      color: '#FFF'
   },
   item: {
      height: 285,
      width: 318,
      backgroundColor: '#202020',
      marginVertical: 18,
      marginHorizontal: 6,
      justifyContent: 'space-around',
      borderRadius: 12
   },
   skin: {
      width: '100%',
      height: 103
   },
   category:{
      height: 23,
      width: '95%',
      backgroundColor: '#D32EE6',
      alignItems: 'center',
      borderRadius: 3,
      marginTop: 6
   },
   stattrak: {
      height: 23,
      width: '95%',
      backgroundColor: '#F89406',
      alignItems: 'center',
      borderRadius: 3,
      marginTop: 6
   },
   description: {
      fontSize: 16,
      color: '#000'
   },
   collections: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row'
   },
   collection: {
      alignItems: 'center'
   },
   case: {
      height: 143,
      width: 169
   },
   collectionText: {
      fontSize: 16,
      color: '#FFF'
   }
})
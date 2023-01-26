// import { StyleSheet, Text, View,FlatList } from 'react-native'
// import React from 'react'
// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title} onPress={()=>console.log("hi")}>{title}</Text>
//   </View>
// );
// export default function PlanScreen() {
//   const DATA = ['Attraction', 'Activities', 'Tickets', 'Hotels', 'Resturants']
//   return (
//     <View style={styles.container}>
//     <FlatList
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       data={DATA}
//       renderItem={({item}) => <Item title={item} />}
//       keyExtractor={item => item}
//     />
// </View>
//   )
// }

// const styles = StyleSheet.create({
//   title: {
//     alignSelf:'center',
//     fontSize: 40,
//     color:'black',
//     fontWeight:'bold'
//   },
// })
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PlanScreen() {
  return (
    <View>
      <Text>PlanScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
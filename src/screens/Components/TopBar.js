import {   SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,} from 'react-native'
  import React from 'react'
  import { useNavigation } from '@react-navigation/native';
  // import AttractionScreen from "../exploreScreen/AttractionScreen"
  // import ActivitiesScreen from "../exploreScreen/ActivitiesScreen"
  // import TicketsScreen from "../exploreScreen/TicketsScreen"
  // import HotelsScreen from "../exploreScreen/HotelsScreen"
  // import RestaurantScreen from "../exploreScreen/RestaurantScreen"


  export default function TopBar({navigation}) {
    // const navigation=useNavigation
    const Item = ({title}) => (
      <View style={styles.item}>
          <Text style={styles.title} onPress={() => navigation.navigate(title)}>{title}</Text>
      </View>
    );
  //   const DATA = [{titl:'Attraction',component:"AttractionScreen"}, 
  //   {titl:'Activities',component:'ActivitiesScreen'},{titl:'Tickets',component:'TicketsScreen'},{titl:'Hotels',component:'HotelsScreen'},{titl:'Resturants',component:'RestaurantScreen'} 
  // ]
  const DATA = ['Attraction', 'Activities', 'Tickets', 'Hotels', 'Restaurants']
    return (
      // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item title={item} />}
          // <View style={styles.item}>
//           {/* <TouchableOpacity
//     onPress={() => navigation.navigate("Login")}
//   ><Text style={styles.title} >{item.titl}</Text></TouchableOpacity> */}

// // </View>}
          keyExtractor={item => item}
        />
</View>
      // </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    container: {
      marginTop:20,
      // flex: 1,
      // flexDirection:'column',
      // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
      flex:1,
      backgroundColor: 'black',
      paddingHorizontal: 15,
      paddingVertical:0,
      marginVertical: 1,
      marginHorizontal: 10,
      height:30,
      borderRadius:15
    },
    title: {
      alignSelf:'center',
      fontSize: 15,
      color:'white',
      fontWeight:'bold'
    },
  });
  
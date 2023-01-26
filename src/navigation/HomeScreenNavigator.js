// import { StyleSheet, Text, View } from 'react-native'
// import * as React from 'react';
// // import React from 'react'
// import HomeScreen from '../screens/HomeScreen'
// import AttractionScreen from '../screens/exploreScreen/AttractionScreen'
// const Drawer = createDrawerNavigator();
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// export default function HomeScreenNavigator() {
//   return (
//     <Drawer.Navigator useLegacyImplementation
//         screenOptions={{
//             drawerStyle: {
//                 backgroundColor: 'black',
//                 opacity: 0.8
//             },
//             drawerInactiveTintColor: '#fff'
//         }}
//         initialRouteName="MyAccountScreen"
//     >

//         <Drawer.Screen name="MyAccountScreen" 
//             options={{
//                 title:"My Account",
//                 headerTitleAlign: "center",
//                 // headerTintColor: Colors.subContainer,
//                 headerStyle: {backgroundColor: Colors.primaryBg},
//                 headerTitleStyle: {fontWeight: "bold", fontSize: 30}
//             }}
//         component={HomeScreen}/>

//         {/* <Drawer.Screen name="Favourite" component={TermsAndConditionsScreen} /> */}

//         <Drawer.Screen name="ThirtPartyLicense" component={TermsAndConditionsScreen} />

//         <Drawer.Screen name="TermsAndConditionsScreen"
//             options={{
//                 title:"Terms And Conditions",
//                 headerTitleAlign: "center",
//                 // headerTintColor: Colors.subContainer,
//                 headerStyle: {backgroundColor: Colors.primaryBg},
//                 headerTitleStyle: {fontWeight: "bold", fontSize: 30}
//             }}
//         component={AttractionScreen} />


//     </Drawer.Navigator>
// )
// }

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AttractionScreen from '../screens/exploreScreen/AttractionScreen'
import ActivitiesScreen from '../screens/exploreScreen/ActivitiesScreen';
import HotelsScreen from '../screens/exploreScreen/HotelsScreen';
import RestaurantScreen from '../screens/exploreScreen/RestaurantScreen';
import TicketsScreen from '../screens/exploreScreen/TicketsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopBar from '../screens/Components/TopBar';
const Stack = createNativeStackNavigator();
export default function HomeScreenNavigator({navigation}) {
  return (
    <>
    <TopBar navigation={navigation}/>
    <Stack.Navigator >
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
      <Stack.Screen name='Attraction' component={AttractionScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Activities' component={ActivitiesScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Hotels' component={HotelsScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Restaurants' component={RestaurantScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Tickets' component={TicketsScreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
    </Stack.Navigator>
  </>
  )
}

const styles = StyleSheet.create({})
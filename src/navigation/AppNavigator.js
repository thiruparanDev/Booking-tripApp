import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
 import AttractionScreen from "../screens/exploreScreen/AttractionScreen"
 import ActivitiesScreen from "../screens/exploreScreen/ActivitiesScreen"
 import HotelsScreen from "../screens/exploreScreen/HotelsScreen"
 import RestaurantScreen from "../screens/exploreScreen/RestaurantScreen"
 import TicketsScreen from "../screens/exploreScreen/TicketsScreen"
const Stack = createNativeStackNavigator();
import MainBottomNavigator from './MainBottomNavigator';
function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
          <Stack.Screen name="MainBottomNavigator" options={{headerShown: false}} component={MainBottomNavigator}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
          {/* <Stack.Screen name="Attraction" component={AttractionScreen} options={{headerShown:false}} /> */}
          {/* <Stack.Screen name="Activities" component={ActivitiesScreen} options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="Hotels" component={HotelsScreen} options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="Restaurants" component={RestaurantScreen} options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="Tickets" component={TicketsScreen} options={{headerShown:false}}/> */}
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();
import MainBottomNavigator from './MainBottomNavigator';
function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/> */}
          <Stack.Screen name="MainBottomNavigator" options={{headerShown: false}} component={MainBottomNavigator}/>
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {/* <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;
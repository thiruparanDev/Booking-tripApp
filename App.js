import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
// import 'react-native-gesture-handler';
import { View } from 'react-native';
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <AppNavigator/>
  );
}

export default App;

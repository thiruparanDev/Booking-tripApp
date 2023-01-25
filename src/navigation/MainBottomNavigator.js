import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import RegisterScreen from '../screens/RegisterScreen';
// import LoginScreen from "../screens/Login";
import Home from "../screens/HomeScreen";
import PlanScreen from "../screens/PlanScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import PlaceLocaterScreen from "../screens/PlaceLocaterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";


const Tab = createBottomTabNavigator();

const MainBottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarStyle: { height: "9%", paddingBottom: 10 , backgroundColor:'black'},
        // tabBarLabelStyle: {color: Colors.subContainerText}
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
                <AntDesign name="search1" size={25} color="white" />
              {/* <Image
                source={require("../assets/Images//login.png")}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              /> */}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
                 <MaterialCommunityIcons name="clock-time-nine-outline" size={25} color="white" />
              {/* <Image
                source={require("../assets/Images//login.png")}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              /> */}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Account"
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
                <MaterialCommunityIcons name="account-circle" size={25} color={'white'} />
              {/* <Image
                source={require("../assets/Images//login.png")}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              /> */}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Place Locater"
        component={PlaceLocaterScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
                <FontAwesome name="location-arrow" size={25} color="white" />
              {/* <Image
                source={require("../assets/Images//login.png")}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              /> */}
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
                                <FontAwesome name="sliders" size={25} color="white" />
                {/* <SimpleLineIcons name="equalizer" size={25} color="black"  style={{transform: [{rotateY: '180deg'}]}}/> */}
              {/* <Image
                source={require("../assets/Images//login.png")}
                resizeMode="contain"
                style={{ height: 25, width: 25 }}
              /> */}
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default MainBottomNavigator;

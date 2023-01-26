// import React from "react";
// import AttractionScreen from "../screens/exploreScreen/AttractionScreen"
// import ActivitiesScreen from "../screens/exploreScreen/ActivitiesScreen"
// import HotelsScreen from "../screens/exploreScreen/HotelsScreen"
// import RestaurantScreen from "../screens/exploreScreen/RestaurantScreen"
// import TicketsScreen from "../screens/exploreScreen/TicketsScreen"
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import {Dimensions} from 'react-native';
// // ...

// const initialLayout = {width: Dimensions.get('window').width};

// const renderTabBar = (props) => (
//   <TabBar
//     {...props}
//     tabStyle={{width: 120, backgroundColor:'black',margin:10}}
//     style={{backgroundColor:'white'}}
//     // contentContainerStyle={{paddingLeft:100,paddingRight:100}}
//     scrollEnabled={true}
//     // indicatorStyle={{backgroundColor: 'white', height: 5, borderRadius: 10}}
//   />
// );

// const MainTopNavigator = ({navigation}) => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'Attraction'},
//     {key: 'second', title: 'Second'},
//     {key: 'third', title: 'Third'},
//     {key: 'fourth', title: 'Fourth'},
//     {key: 'fifth', title: 'Fifth'},
//   ]);

//   const renderScene = SceneMap({
    
//     first: AttractionScreen,
//     second: ActivitiesScreen,
//     third: HotelsScreen,
//     fourth: RestaurantScreen,
//     fifth: TicketsScreen,
//   });
//   return (
//     <TabView
//     navigationState={{index, routes}}
//     renderTabBar={renderTabBar}
//     renderScene={renderScene}
//     onIndexChange={setIndex}
//     initialLayout={initialLayout}
//   />
//   );
// };
// export default MainTopNavigator;

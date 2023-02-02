// import {
//   Image,
//   // SafeAreaView,
//   // View,
//   FlatList,
//   TextInput,
//   StyleSheet,
//   Text,
//   ScrollView,
//   TouchableOpacity
//   //   StatusBar,
//   //   TouchableOpacity,}
// } from "react-native";
// import React from "react";
// import { View } from "react-native";
// import TopBar from "./Components/TopBar";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import MainTopNavigator from "../navigation/MainTopNavigator";
// // import api from "../api.json"

// export default function HomeScreen({navigation}) {
//   // const array = [
//   //   {
//   //     key: '1',
//   //     title: 'example title 1',
//   //     subtitle: 'example subtitle 1',
//   //   },
//   //   {
//   //     key: '2',
//   //     title: 'example title 2',
//   //     subtitle: 'example subtitle 2',
//   //   },

//   // ];
//   const data = [
//     {
//       id: "1",
//       mainHeading: "Attraction",
//       data1: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 1",
//         description: "Description 1",
//       },
//       data2: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 2",
//         description: "Description 2",
//       },
//     },
//     {
//       id: "2",
//       mainHeading: "Activities",
//       data1: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 3",
//         description: "Description 3",
//       },
//       data2: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 4",
//         description: "Description 4",
//       },
//     },
//     {
//       id: "3",
//       mainHeading: "Tickets",
//       data1: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 5",
//         description: "Description 5",
//       },
//       data2: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 6",
//         description: "Description 6",
//       },
//     },
//     {
//       id: "4",
//       mainHeading: "Hotels",
//       data1: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 7",
//         description: "Description 7",
//       },
//       data2: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 8",
//         description: "Description 8",
//       },
//     },
//     {
//       id: "5",
//       mainHeading: "Restaurants",
//       data1: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 9",
//         description: "Description 9",
//       },
//       data2: {
//         image: require("../assets/Images/Home_images/image1.png"),
//         heading: "Heading 10",
//         description: "Description 10",
//       },
//     },
//   ];
//   return (
//     <View style={styles.container}>
//       {/* <TopBar navigation={navigation}/> */}
//       {/* <Image style={styles.logo} source={require('../assets/Images/login.png')} /> */}
//       <Text style={styles.text2}>Whats on you Mind?</Text>
//       <View style={styles.searchBar}>
//         <AntDesign name="search1" size={25} color="black" />
//         <TextInput style={styles.textInputStyle} placeholder="Search" />
//         <FontAwesome name="microphone" size={25} color="black" />
//       </View>
//       {/* <ScrollView>
//         {array.map(element => {
//       return (
//         <View key={element.key} style={{margin: 10}}>
//           <Text>{element.title}</Text>
//           <Text>{element.subtitle}</Text>
//         </View>
//       );
//     })
// }
//     </ScrollView> */}
//       <FlatList
//         contentContainerStyle={{ paddingBottom: 200 }}
//         data={data}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.mainHeading}>{item.mainHeading}</Text>
//             <View style={styles.dataContainer}>
//               <Image source={item.data1.image} style={styles.image} />
//               <View style={styles.textContainer}>
//                 <Text style={styles.heading}>{item.data1.heading}</Text>
//                 <Text style={styles.description}>{item.data1.description}</Text>
//               </View>
//             </View>
//             <View style={styles.dataContainer}>
//               <Image source={item.data2.image} style={styles.image} />
//               <View style={styles.textContainer}>
//                 <Text style={styles.heading}>{item.data2.heading}</Text>
//                 <Text style={styles.description}>{item.data2.description}</Text>
//               </View>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   // view:{
//   //   position:'absolute',
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   //   flex: 1,
//   //   backgroundColor: 'white',

//   // },
//   // logo: {
//   //   // flex:3,
//   //   position: 'absolute',
//   //   top: 100,
//   //   height:200,
//   //   alignSelf: 'center',
//   // },
//   container: {
//     backgroundColor: "white",
//   },
//   text2: {
//     color: "grey",
//     fontSize: 33,
//     textAlign: "center",
//     color: "black",
//     fontWeight: "bold",
//     marginTop: 25,
//     fontFamily: "serif",
//   },
//   textInputStyle: {
//     alignSelf: "center",
//     height: 35,
//     // margin: 7,
//     // borderWidth: 1,
//     padding: 10,
//     width: 275,
//     // borderRadius: 10,
//   },
//   itemContainer: {
//     marginVertical: 20,
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   dataContainer: {
//     backgroundColor: "gray",
//     flex: 1,
//     flexDirection: "row",
//     padding: 10,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     resizeMode: "cover",
//     borderRadius: 5,
//   },
//   textContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   mainHeading: {
//     paddingHorizontal: 15,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   description: {
//     fontSize: 14,
//     color: "#555",
//   },
//   searchBar: {
//     alignSelf:'center',
//     width:340,
//     marginHorizontal:10,
//     justifyContent:'space-around',
//     alignItems:'center',
//     flexDirection:'row',
//     // borderWidth: 1,
//     borderRadius: 10,
//     padding:0,
//     backgroundColor:'grey',
//     // marginBottom:10
//   },
// });

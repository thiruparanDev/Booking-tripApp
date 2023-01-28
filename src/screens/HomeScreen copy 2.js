import {
  Image,
  // SafeAreaView,
  // View,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
  //   StatusBar,
  //   TouchableOpacity,}
} from "react-native";
import React from "react";
import { View } from "react-native";
import TopBar from "./Components/TopBar";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MainTopNavigator from "../navigation/MainTopNavigator";
// import api from "../api.json"

export default function HomeScreen({navigation}) {
  // const array = [
  //   {
  //     key: '1',
  //     title: 'example title 1',
  //     subtitle: 'example subtitle 1',
  //   },
  //   {
  //     key: '2',
  //     title: 'example title 2',
  //     subtitle: 'example subtitle 2',
  //   },

  // ];
  const mainData = [
    {
      id: "1",
      mainHeading: "Attraction",
      subItems: [{
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 1",
        description: "Description 1",
      },
      {
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 2",
        description: "Description 2",
      }]
    },
    {
      id: "2",
      mainHeading: "Activities",
      subItems:[ {
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 3",
        description: "Description 3",
      },
    {
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 4",
        description: "Description 4",
      }]
    },
    {
      id: "3",
      mainHeading: "Tickets",
      subItems: [{
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 5",
        description: "Description 5",
      },
      {
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 6",
        description: "Description 6",
      }]
    },
    {
      id: "4",
      mainHeading: "Hotels",
      subItems: [{
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 7",
        description: "Description 7",
      },
       {
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 8",
        description: "Description 8",
      },]
    },
    {
      id: "5",
      mainHeading: "Restaurants",
      subItems:[{
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 9",
        description: "Description 9",
      },
      {
        image: require("../assets/Images/Home_images/image1.png"),
        heading: "Heading 10",
        description: "Description 10",
      }]
    }
  ];

  const renderMainItem = ({ item, index }) => (
    <View key={index} style={styles.itemContainer}>
      <Text style={styles.mainHeading}>{item.mainHeading}</Text>
      <FlatList
        data={item.subItems}
        renderItem={renderSubItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  const renderSubItem = ({ item, index }) => (
    <View >
    <View key={index} style={styles.dataContainer}>
      <View style={{ width: '30%'}}>
          <Image source={item.image} style={styles.image}/>
      </View>
      <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
    </View>
  );
  return (
    <View style={styles.container}>
      {/* <TopBar navigation={navigation}/> */}
      {/* <Image style={styles.logo} source={require('../assets/Images/login.png')} /> */}
      <Text style={styles.text2}>Whats on you Mind?</Text>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={25} color="black" />
        <TextInput style={styles.textInputStyle} placeholder="Search" />
        <FontAwesome name="microphone" size={25} color="black" />
      </View>
      {/* <ScrollView>
        {array.map(element => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.subtitle}</Text>
        </View>
      );
    })
}
    </ScrollView> */}
    <FlatList
      data={mainData}
      renderItem={renderMainItem}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  // view:{
  //   position:'absolute',
  //   justifyContent: 'center',
  //   alignItems:'center',
  //   flex: 1,
  //   backgroundColor: 'white',

  // },
  // logo: {
  //   // flex:3,
  //   position: 'absolute',
  //   top: 100,
  //   height:200,
  //   alignSelf: 'center',
  // },
  container: {
    backgroundColor: "white",
    paddingBottom:100
  },
  text2: {
    color: "grey",
    fontSize: 33,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    marginTop: 25,
    fontFamily: "serif",
  },
  textInputStyle: {
    alignSelf: "center",
    height: 35,
    // margin: 7,
    // borderWidth: 1,
    padding: 10,
    width: 275,
    // borderRadius: 10,
  },
  itemContainer: {
    marginVertical: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  dataContainer: {
    backgroundColor: "gray",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius:5
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  mainHeading: {
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  searchBar: {
    alignSelf:'center',
    width:340,
    marginHorizontal:10,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    // borderWidth: 1,
    borderRadius: 10,
    padding:0,
    backgroundColor:'grey',
    // marginBottom:10
  },
});

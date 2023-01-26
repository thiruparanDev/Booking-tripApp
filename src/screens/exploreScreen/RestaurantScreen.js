
// import { StyleSheet, Text, View ,Image,TextInput,FlatList} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button, ScrollView ,TextInput,TouchableOpacity} from 'react-native';

export default function RestaurantScreen(){
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or load your data here
    // and update the state
    setData([
      {
        id: '1',
        heading: 'Heading 1',
        images: [
          { id: '1', url: require('../../assets/Images/login.png'),btn:"btn1" },
          { id: '2', url: require('../../assets/Images/login.png'),btn:"btn2" },
          { id: '3', url: require('../../assets/Images/login.png' ),btn:"btn3"},
        ],
      },
      {
        id: '2',
        heading: 'Heading 2',
        images: [
          { id: '4', url: require('../../assets/Images/login.png'),btn:"btn4" },
          { id: '5', url: require('../../assets/Images/login.png'),btn:"btn5"  },
          { id: '6', url: require('../../assets/Images/login.png'),btn:"btn6"  },
        ],
      },
    ]);
  }, []);

  // const handleButtonPress = (item) => {
  //   // Handle button press here
  //   console.log(item);
  // };

  return (
    <View style={styles.container}>
            <Image
        style={styles.logo}
        source={require("../../assets/Images/login.png")}
      />
      <Text style={styles.text2}>Whats on you Mind?</Text>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={18} color="black" />
        <TextInput style={styles.textInputStyle} placeholder="Search" placeholderStyle={{fontWeight:'bold',alignSelf:'center',backgroundColor:'white'}}/>
        <FontAwesome name="microphone" size={18} color="black" />
      </View>
      <Text>RestaurantScreen</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <ScrollView horizontal={true} style={styles.scrollViewContainer}>
            {item.images.map((image) => (
              <View key={image.id} style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={image.url }
                />
<TouchableOpacity style={styles.item}><Text style={styles.title} >{image.btn}</Text></TouchableOpacity>
        
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    />
    </View>
  );
};

const styles = {
  container:{
    backgroundColor:'white',
    marginBottom:270
  
  },
  logo:{
    // position: "absolute",
    top: 20,
    height:130,
    width:150,
    alignSelf: "center",
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
    marginBottom:10,
    height:30
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
  text2: {
    color: "grey",
    fontSize: 33,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    marginTop: 25,
    fontFamily: "serif",
  },
  itemContainer: {
    padding: 10,
    // backgroundColor:'grey',
  },
  scrollViewContainer:{
    padding:10,
    backgroundColor:'grey',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    marginRight: 10,
    
  },
  image: {
    width: 250,
    height: 250,
  },
  item: {
    marginTop:20,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex:1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical:0,
    marginVertical: 1,
    marginHorizontal: 10,
    height:20,
    borderRadius:15,
    width:100,
    alignSelf:'center'
  },
  title: {
    alignSelf:'center',
    fontSize: 15,
    color:'white',
    fontWeight:'bold'
  },
  
};



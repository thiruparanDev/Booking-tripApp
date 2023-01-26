import { StyleSheet, Text, View ,Image,TextInput,FlatList} from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function AttractionScreen() {
  const data = [
    {
      heading: 'Heading 1',
      images: [
        require('../../assets/Images/login.png'),
        require('../../assets/Images/login.png'),
        require('../../assets/Images/login.png'),
        require('../../assets/Images/login.png'),
      ],
      description: 'Description 1',
    },
    {
      heading: 'Heading 2',
      images: [
        require('../../assets/Images/login.png'),
        require('../../assets/Images/login.png'),
        require('../../assets/Images/login.png'),
        require('../../assets/Images/login.png'),
      ],
      description: 'Description 2',
    },
    // Add more data sets here
  ];
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
      <Text>AttractionScreen</Text>

    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <View style={styles.imageContainer}>
            {item.images.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    marginBottom:200
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
    padding: 20,
    backgroundColor:'grey',
    margin:10,
    marginBottom:60,
    paddingVertical:10
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
  },
})
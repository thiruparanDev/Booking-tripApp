
// import { StyleSheet, Text, View } from 'react-native'
// import React, {useState} from 'react'
// import { ScrollView } from 'react-native-gesture-handler'

// export default function PlanScreen() {




//   return (
//     <View>
//           <ScrollView>
//         {/* <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>My Plan</Text>
//           <View style={styles.lineStyle} />
//         </View> */}
//         {mainData.map((item, index) => (
//           <View key={index}>
//             <Text>{item.title}</Text>
//             <ScrollView horizontal={true}>
//               {item.subItems.map((subItem, subIndex) => (
//                 <View key={subIndex}>
//                   <Text>{subItem.name}</Text>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         ))}
//         </ScrollView>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     paddingTop: '1%',
//     justifyContent: "flex-end",
//     // width:700,
//     backgroundColor: "black",
//     height: '100%',
//     // marginBottom: '2%',
//     justifyContent: "center",
//   },
//   headerText: {
//     color: "white",
//     fontSize: 25,
//     textAlign: "center",
//     fontWeight:'bold'
//     // backgroundColor:'blue'
//   },
//   lineStyle: {
//     marginHorizontal:20,
//     paddingTop: 0,
//     top: '4%',
//     borderWidth: 1.3,
//     borderColor: "white",
//     // margin: 30,
//     marginBottom: '2%',
//     marginTop: 0,
//   },
// })

import { StyleSheet, Text, View, FlatList,Image } from 'react-native'
import React,{useState} from 'react'

export default function PlanScreen() {
  const [mainData, setMainData] = useState([
    {
      title: 'Item 1',
      subItems: [
        { name: 'Sub Item 1', heading: 'Heading 1', description: 'Description 1', image: require("../assets/Images/login.png") },
        { name: 'Sub Item 2', heading: 'Heading 2', description: 'Description 2', image: require("../assets/Images/login.png") },
        { name: 'Sub Item 3', heading: 'Heading 3', description: 'Description 3', image: require("../assets/Images/login.png") },
      ],
    },
    {
      title: 'Item 2',
      subItems: [
        { name: 'Sub Item 4', heading: 'Heading 4', description: 'Description 4', image: require("../assets/Images/login.png") },
        { name: 'Sub Item 5', heading: 'Heading 5', description: 'Description 5', image: require("../assets/Images/login.png") },
        { name: 'Sub Item 6', heading: 'Heading 6', description: 'Description 6', image: require("../assets/Images/login.png") },
      ],
    },
    {
      title: 'Item 3',
      subItems: [
        { name: 'Sub Item 7', heading: 'Heading 7', description: 'Description 7', image: require("../assets/Images/login.png") },
        { name: 'Sub Item 8', heading: 'Heading 8', description: 'Description 8', image: require("../assets/Images/login.png") },
        { name: 'Sub Item 9', heading: 'Heading 9', description: 'Description 9', image: require("../assets/Images/login.png") },
      ],
    },
  ]);
  const renderMainItem = ({ item, index }) => (
    <View key={index}>
      <Text>{item.title}</Text>
      <FlatList
        data={item.subItems}
        renderItem={renderSubItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  const renderSubItem = ({ item, index }) => (
    <View>
      <Text>{item.name}</Text>
    <View key={index} style={styles.subItem}>
      <View style={{ width: '30%'}}>
          <Image source={item.image} style={styles.image}/>
      </View>
      <View style={{ width: '70%', alignItems: 'flex-start'}}>
          <Text>{item.heading}</Text>
          <Text>{item.description}</Text>
      </View>
    </View>
    </View>
  );
  return (
    <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Plan</Text>
          <View style={styles.lineStyle} />
        </View> 
    <FlatList
      data={mainData}
      renderItem={renderMainItem}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height:100,
    width:100
  },
    headerContainer: {
    paddingTop: '1%',
    justifyContent: "flex-end",
    // width:700,
    backgroundColor: "black",
    height: '10%',
    // marginBottom: '2%',
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight:'bold'
    // backgroundColor:'blue'
  },
  lineStyle: {
    marginHorizontal:20,
    paddingTop: 0,
    top: '4%',
    borderWidth: 1.3,
    borderColor: "white",
    // margin: 30,
    // marginBottom: '0.1%',
    marginTop: 0,
  },
subItem:{
  flexDirection: 'row', 
  alignItems: 'center',
  borderColor:'black',
  borderWidth:2,
  padding:10,
  margin:10,
  borderRadius:10
}
})
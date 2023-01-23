import {   SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,} from 'react-native'
  import React from 'react'
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  export default function HomeScreen() {
    const DATA = ['Attraction', 'Activities', 'Tickets', 'Hotels', 'Resturants']
    return (
      // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item title={item} onPress={()=>console.log("hi")}/>}
          keyExtractor={item => item}
        />
</View>
      // </SafeAreaView>
    )
  }
  const styles = StyleSheet.create({
    container: {
      marginTop:20,
      // flex: 1,
      // flexDirection:'column',
      // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
      flex:1,
      backgroundColor: 'black',
      paddingHorizontal: 15,
      paddingVertical:0,
      marginVertical: 1,
      marginHorizontal: 10,
      height:30,
      borderRadius:15
    },
    title: {
      alignSelf:'center',
      fontSize: 15,
      color:'white',
      fontWeight:'bold'
    },
  });
  
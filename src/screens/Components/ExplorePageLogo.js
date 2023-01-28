import { StyleSheet, Text, View ,Image,TextInput,FlatList} from 'react-native'
import React from 'react'

export default function ExplorePageLogo() {
  return (
            <Image
        style={styles.logo}
        source={require("../../assets/Images/login.png")}
      />
  )
}

const styles = StyleSheet.create({
    logo:{
        // position: "absolute",
        top: '3%',
        height:'21%',
        width:'40%',
        alignSelf: "center",
      },
})
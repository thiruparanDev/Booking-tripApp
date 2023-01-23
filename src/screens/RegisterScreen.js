import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";

function RegisterScreen() {
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Register</Text>
        <View style={styles.lineStyle} />
      </View>
        <Image source={require('../assets/Images/blank-profile-picture-973460_960_720.png')} style={styles.image}/>
        <Text style={[styles.textStyle,{textAlign:'center'}]}>Profile</Text>
        <TextInput style={styles.textInputStyle} placeholder="User Name" />
        <TextInput style={styles.textInputStyle} placeholder="Your Name" />
        <TextInput style={styles.textInputStyle} placeholder="Address Line 1" />
        <TextInput style={styles.textInputStyle} placeholder="Address Line 2" />
        <View style={styles.textView}>
          <Text
            style={[styles.textInputStyle, { width: 100, textAlign: "center" }]}
          >
            Country
          </Text>
          <Text
            style={[styles.textInputStyle, { width: 100, textAlign: "center" }]}
          >
            Country
          </Text>
        </View>
        <TextInput style={styles.textInputStyle} placeholder="Mobile No" />
        <TouchableOpacity
          // activeOpacity={0.6}
          style={styles.pressableStyle}
          // onPress={onPress}
        >
          <Text style={styles.pressableText}>Verify the Number</Text>
        </TouchableOpacity>
        <View style={styles.codeView}>
          <Text
            style={[styles.textInputStyle, { width: 150, textAlign: "center" }]}
          >
            Enter the code
          </Text>
          <View style={styles.codeBoxView}>
          <TextInput style={[styles.textInputStyle,{width:30,margin:3,height:30}]}></TextInput>
          <TextInput style={[styles.textInputStyle,{width:30,margin:3,height:30}]}></TextInput>
          <TextInput style={[styles.textInputStyle,{width:30,margin:3,height:30}]}></TextInput>
          <TextInput style={[styles.textInputStyle,{width:30,margin:3,height:30}]}></TextInput>
          </View>
        </View>
        <TouchableOpacity
          // activeOpacity={0.6}
          style={[styles.pressableStyle,{width:70}]}
          // onPress={onPress}
        >
          <Text style={styles.pressableText}>Confirm</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Create password</Text>
        <TextInput style={styles.textInputStyle} placeholder="Password" />
        <TextInput style={styles.textInputStyle} placeholder="Confirm password" />
        <TouchableOpacity
          // activeOpacity={0.6}
          style={[styles.pressableStyle,{width:70}]}
          // onPress={onPress}
        >
          <Text style={styles.pressableText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    // paddingHorizontal:15,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    // alignItems: 'center',
  },
  textInputStyle: {
    alignSelf: "center",
    height: 35,
    margin: 7,
    borderWidth: 1,
    padding: 7,
    width: 350,
    borderRadius: 10,
  },
  textView: {
    marginHorizontal:15,
    alignItems: "flex-start",
    flexDirection: "row",
    //   justifyContent:'center',
    //   alignItems:'flex-end',
    //   // backgroundColor:'black'
  },
  pressableStyle: {
    backgroundColor: "#000000",
    right: 5,
    margin: 12,
    width: 140,
    margin: 2,
    padding: 2,
    borderRadius: 10,
    alignSelf: "flex-end",
    right: 20,
    top: 10,
    height: 30,
    marginBottom: 50,
    // alignItems:'flex-end'
  },
  pressableText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 1,
  },
  codeView:{
    marginHorizontal:15,
    alignItems: "center",
    justifyContent:'space-between',
    flexDirection: "row",
  },
  codeBoxView:{
    
    // width:170,
    // marginEnd:10,
    alignItems:'flex-end',
    flexDirection:'row',
    // justifyContent: 'flex-end',
  },
  textStyle:{
    color:'black',
    fontSize:20,
    marginHorizontal:15,
  },
  image:{
    height:150,
    width:150,
    borderRadius:75,
    alignSelf:'center'
  },
  headerContainer:{
    paddingTop:30,
    justifyContent:'flex-end',
    // width:700,
    backgroundColor:'black',
    height:100,
    marginBottom:10,
    justifyContent:'center'
  },
  headerText:{
    color:'white',
    fontSize:30,
    textAlign:'center',
    // backgroundColor:'blue'
  },
  lineStyle: {
    paddingTop:0,
    top:15,
    borderWidth: 1.3,
    borderColor: 'white',
    // margin: 30,
    marginBottom:20,
    marginTop:0
  },
});
export default RegisterScreen;

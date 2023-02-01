import React, { useState } from "react";
import { authentication } from "../config/db";
// import  firebase  from 'firebase/compat';
import { signInWithEmailAndPassword, auth } from "firebase/auth";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
// import {TouchableOpacity} from 'react-native-gesture-handler'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";

function LoginScreen({ navigation }) {
  // const [loginCredential, setLoginCredential] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  // let list1=[[Ionicons,'logo-google'],[AntDesign,'apple1'],[AntDesign,'twitter'],[EvilIcons,'sc-facebook']]
  const handleLogin = () => {
    // const { email, password } = loginCredential;
    if (email == "" && password == "") {
      // this.dropDownAlertRef.alertWithType('error', 'Error', 'Please enter the Credentials..');
      alert("Please enter credentials");
    } else if (email == "") {
      alert("Please enter email");
      // this.dropDownAlertRef.alertWithType('error', 'Error', 'Please enter Email..');

      return false;
    } else if (password == "") {
      // this.dropDownAlertRef.alertWithType('error', 'Error', 'Please enter Password..');
      alert("Please enter password");
      return false;
    } else {
      signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
          //setUserGlobalID(userCredential);
          alert("Welcome to Triptoster");
        })
        .catch((error) => {
          console.log(error);
          if (error.code == "auth/invalid-email") {
            alert("Invalid E-mail address..!");
          } else if (error.code == "auth/user-not-found") {
            alert("User not found..!");
          } else if (error.code == "auth/wrong-password") {
            alert("Wrong password..!");
          } else {
            alert(error.code);
          }
        });
    }
  };
  function setUserGlobalID(userCredential){

    fetch(APP_URL + 'get_customer_id', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firebase_user_id: userCredential.user.uid,
        })
    })
    .then(response => response.json())      
    .then((responseJson) => {
        console.log("user_id = "+responseJson.id);
        global.member_id = responseJson.id;
        global.member_first_name = responseJson.first_name;
        global.member_last_name = responseJson.last_name;
        global.member_profile_photo = responseJson.profile_photo;
        // this.props.navigation.navigate("MainBottomNavigator");
    })
    .catch((error) => {
        console.log(error);
        // this.showError(error.code);
    });

}

  
  return (
    <View style={styles.viewStyle}>
      <Image
        style={styles.logo}
        source={require("../assets/Images/login.png")}
      />
      <View style={styles.view1Style}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Username or Mobile Number"
          onChangeText={setEmail}
        />
        <TextInput style={styles.textInputStyle} placeholder="Password" onChangeText={setPassword}/>

        <View style={styles.view2Style}>
          <TouchableOpacity
            // activeOpacity={0.6}
            style={styles.pressableStyle}
            // onPress={onPress}
            onPress={() => handleLogin()}
          >
            <Text style={styles.pressableText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lineStyle} />
        <Text style={styles.text1}>Or Signup With</Text>
        <View style={styles.view4Style}>
          <TouchableOpacity style={styles.view3Style}>
            <Ionicons name="logo-google" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.view3Style}>
            <AntDesign name="apple1" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.view3Style}>
            <AntDesign name="twitter" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.view3Style}>
            <EvilIcons name="sc-facebook" size={45} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.lastView}>
        {/* <View styles={styles.view5Style}> */}
          <Text style={styles.text2}>New to Triptosters?</Text>
          {/* <TouchableOpacity    
          > */}
            <Text style={[styles.text2,{fontWeight:'bold'}]} onPress={() => navigation.navigate("RegisterScreen")}> Register</Text>
          {/* </TouchableOpacity> */}
          {/* </View> */}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    // alignItems: 'center',
  },
  view1Style: {
    top: 120,
  },
  // textStyle: {
  //   alignItems:'center',
  //   color:'blue',
  //   fontSize: 30,
  // },
  view2Style: {},
  pressableStyle: {
    backgroundColor: "#000000",
    right: 5,
    margin: 12,
    width: 80,
    margin: 2,
    padding: 2,
    borderRadius: 10,
    alignSelf: "flex-end",
    right: 20,
    top: 10,
    height: 30,

    // alignItems:'flex-end'
  },
  pressableText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 1,
  },
  textInputStyle: {
    alignSelf: "center",
    height:'10%',
    // height: 35,
    margin: 7,
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 10,
  },
  logo: {
    // flex:3,
    height:'35%',
    position: "absolute",
    top: '4%',
    // height:40
    alignSelf: "center",
  },
  lineStyle: {
    top: '10%',
    borderWidth: 1.3,
    borderColor: "black",
    margin: 30,
    marginBottom: 70,
  },
  text1: {
    color: "grey",
    fontSize: 20,
    textAlign: "center",
  },
  view3Style: {
    // backgroundColor:'orange',
    // flex:1,
    alignItems: "center",
    // justifycontent:'center',
    borderRadius: 30,
    borderWidth: 1,
    width: 49,
    padding: 3,
    height: 49,
    margin: 10,
  },
  view4Style: {
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    // top: 3,
  },
  text2: {
    top: "8%",
    color: "black",
    fontSize: 15,
    textAlign: "center",
    // backgroundColor:'orange'
  },
  lastView:{
    justifyContent:'center',
    flexDirection: 'row',
  }
});

export default LoginScreen;

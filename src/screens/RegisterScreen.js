import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { authentication } from "../config/db";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {APP_URL} from '../constants/App';
// import RNFetchBlob from 'rn-fetch-blob';

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
];

function RegisterScreen() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [yourName,setYourName] = useState("")
  const [mobileNo,setMobileNo] = useState("")
  const [addressLine1,setAddressLine1] = useState("")
  const [addressLine2,setAddressLine2] = useState("")
  // const [id,setId]
  // const [code1,setCode1] = useState("")
  // const [code2,setCode2] = useState("")
  // const [code3,setCode3] = useState("")
  // const [code4,setCode4] = useState("")

  const handleSubmit=()=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) == false){
      alert("Invalid Email Address..!");
      return false;
  }else if(userName == "") {
    alert("Please enter a user name..!");
    return false; 
  }else if(password == "") {
      alert("Please enter a password..!");
      return false;
  } else if(password.length < 8) {
      alert("Password must be at least 8 characters long..!");
      return false;
  } else if(confirmPassword == "") {
      alert("Please enter a confirm password..!");
      return false;
  } else if(password != confirmPassword) {
      alert("Password and confirm password not match..!");
      return false;
  } else if(yourName == "") {
      alert("Please enter a Name..!");
      return false;
  }else if(addressLine1 == "") {
    alert("Please enter address..!");
    return false;
}else if(addressLine2 == "") {
  alert("Please enter address..!");
  return false;
}else if(mobileNo == "") {
  alert("Please enter Phone number..!");
  return false;
}else {
    createUserWithEmailAndPassword(authentication, email,password)
    .then((userCredential) => {
        createUserDetails(userCredential.user.uid);
    })
    .catch((error) => {
        if(error.code == 'auth/invalid-email'){
            alert("Invalid Email Address..!");
        }
        if (error.code == 'auth/email-already-in-use') {
            alert("Email already in use..!");
        } else {
            alert(error.code);
        }
    });
}

function createUserDetails(userID){
  RNFetchBlob.fetch('POST', APP_URL+'register', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
  }, [
      { name: 'email', data: email },
      { name: 'password', data: password },
      { name: 'user_name', data: yourName },
      // { name: 'user_surname', data: yourName },
      { name: 'mobile_no', data: mobileNo },
      // { name: 'country_id', data: country_id+"" },
      { name: 'firebase_user_id', data: userID },
      // { name: 'Address', data: addressLine1+addressLine2 },
  ])
  .then(response => console.log(console.log(response.json())))
    // response.json())
  // .then((responseJson) => {
  //     console.log(responseJson);
  //     if(responseJson[0]=="saved"){
  //        global.id = responseJson[1];
  //        global.name = responseJson[2];
  //         alert("Registered successfully.")
  //         // setTimeout(()=>{
  //         //     this.props.navigation.navigate("Home");
  //         // }, 2000);
  //     } else {
  //         // this.showError("error..!");
  //     }
  // })
  // .catch((error) => {
  //     console.log(error);
  //     // this.showError("error..!");
  // });

}
}
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Register</Text>
          <View style={styles.lineStyle} />
        </View>
        <Image
          source={require("../assets/Images/blank-profile-picture-973460_960_720.png")}
          style={styles.image}
        />
        <Text style={[styles.textStyle, { textAlign: "center" }]}>Profile</Text>
        <TextInput style={styles.textInputStyle} placeholder="User Name" onChangeText={setUserName}/>
        <TextInput style={styles.textInputStyle} placeholder="Email" onChangeText={setEmail}/>
        <TextInput style={styles.textInputStyle} placeholder="Your Name" onChangeText={setYourName}/>
        <TextInput style={styles.textInputStyle} placeholder="Address Line 1" onChangeText={setAddressLine1}/>
        <TextInput style={styles.textInputStyle} placeholder="Address Line 2" onChangeText={setAddressLine2}/>
        <View style={styles.textView}>
          <Text
            style={[styles.textInputStyle, { width: 100, textAlign: "center" }]}
          >
            Country
          </Text>
          <View style={{borderColor:'black'}}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150,borderColor:'blue'}}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              {options.map((option) => (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
            {/* <Text>Selected value: {selectedValue}</Text> */}
          </View>
        </View>
        <TextInput style={styles.textInputStyle} placeholder="Mobile No" onChangeText={setMobileNo}/>
        <TouchableOpacity
          // activeOpacity={0.6}
          style={styles.pressableStyle}
          // onPress={onPress}
        >
          <Text style={styles.pressableText} >Verify the Number</Text>
        </TouchableOpacity>
        <View style={styles.codeView}>
          <Text
            style={[styles.textInputStyle, { width: 150, textAlign: "center" }]}
          >
            Enter the code
          </Text>
          <View style={styles.codeBoxView}>
            <TextInput
              style={[
                styles.textInputStyle,
                { width: 30, margin: 3, height: 30 },
              ]}
            ></TextInput>
            <TextInput
              style={[
                styles.textInputStyle,
                { width: 30, margin: 3, height: 30 },
              ]}
            ></TextInput>
            <TextInput
              style={[
                styles.textInputStyle,
                { width: 30, margin: 3, height: 30 },
              ]}
            ></TextInput>
            <TextInput
              style={[
                styles.textInputStyle,
                { width: 30, margin: 3, height: 30 },
              ]}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          // activeOpacity={0.6}
          style={[styles.pressableStyle, { width: 70 }]}
          // onPress={onPress}
        >
          <Text style={styles.pressableText}>Confirm</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Create password</Text>
        <TextInput style={styles.textInputStyle} placeholder="Password" onChangeText={setPassword} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Confirm password"
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          // activeOpacity={0.6}
          style={[styles.pressableStyle, { width: 70 }]}
          // onPress={onPress}
        >
          <Text style={styles.pressableText} onPress={()=>{handleSubmit()}}>Confirm</Text>
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
    marginHorizontal: 15,
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
  codeView: {
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  codeBoxView: {
    // width:170,
    // marginEnd:10,
    alignItems: "flex-end",
    flexDirection: "row",
    // justifyContent: 'flex-end',
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    marginHorizontal: 15,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: "center",
  },
  headerContainer: {
    paddingTop: 30,
    justifyContent: "flex-end",
    // width:700,
    backgroundColor: "black",
    height: 100,
    marginBottom: 10,
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    // backgroundColor:'blue'
  },
  lineStyle: {
    marginHorizontal:20,
    paddingTop: 0,
    top: 15,
    borderWidth: 1.3,
    borderColor: "white",
    // margin: 30,
    marginBottom: 20,
    marginTop: 0,
  },
  pickerView:{
    borderColor:'black',
    backgroundColor:'blue'
  },
  // picker:{
  //   alignSelf:'center'
  // }
});
export default RegisterScreen;

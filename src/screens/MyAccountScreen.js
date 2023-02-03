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
import React, { useEffect, useState } from "react";
import RNFetchBlob from "rn-fetch-blob";
import { apiCall } from "../Utils";
import { onAuthStateChanged, updateEmail, updatePassword } from "firebase/auth";
// import { authentication } from "../config/db";

function RegisterScreen({ navigation }) {
  useEffect(() => {
    getCountries();
    getCustomerDetails()
  }, []);
  const [userId, setUserId]=useState("")
  const [selectedCountry, setselectedCountry] = useState("option1");
  const [newPassword,setNewPassword]=useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [yourName, setYourName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [countries, setCountries] = useState();
  const [countryCallingCode,setCountryCallingCode]=useState("")

  const handleSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) == false) {
      alert("Invalid Email Address..!");
      return false;
    // } else if (userName == "") {
    //   alert("Please enter a user name..!");
    //   return false;
    // } else if (password == "") {
    //   alert("Please enter a password..!");
    //   return false;
    // } else if (password.length < 8) {
    //   alert("Password must be at least 8 characters long..!");
    //   return false;
    // } else if (confirmPassword == "") {
    //   alert("Please enter a confirm password..!");
    //   return false;
    // } else if (password != confirmPassword) {
    //   alert("Password and confirm password not match..!");
    //   return false;
    } else if (yourName == "") {
      alert("Please enter a Name..!");
      return false;
    } else if (addressLine1 == "") {
      alert("Please enter address..!");
      return false;
    } else if (addressLine2 == "") {
      alert("Please enter address..!");
      return false;
    } else if (mobileNo == "") {
      alert("Please enter Phone number..!");
      return false;
    } else if (isNaN(mobileNo)) {
      alert("Please enter a number");
    } else {
      updateFireBase()
    }

    // const createUserDetails = (userId) => {
    //   const userDetails = {
    //     email: email,
    //     password: password,
    //     // name:yourName,
    //     phone: mobileNo,
    //     country_calling_code: "0094",
    //     firebase_user_id: "",
    //   };
      // console.log(userId)
      // apiCall("register", "POST", { ...userDetails, firebase_user_id: userId })
      //   .then((responseJson) => {
      //     console.log(JSON.stringify(responseJson));
      //     if (responseJson[0] == "saved") {
      //       global.id = responseJson[1];
      //       global.name = responseJson[2];
      //       // setId(responseJson[1])
      //       // setName(responseJson[2])
      //       alert("Registered successfully. Welcome to TripToster");
      //       setTimeout(() => {
      //         navigation.navigate("MainBottomNavigator");
      //       }, 2000);
      //     } else {
      //       console.log("Not successful");
      //       // this.showError("error..!");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     // this.showError("error..!");
      //   });
    // };
  };
  function updateFireBase(){
    onAuthStateChanged(authentication, (user) => {
        if (user) {
          updateEmail(user,email).then(() => {
            updatePassword(user, newPassword).then(() => {
          }).catch((error) => {
              console.log(error);
              alert(error)
              // this.showError(error.message);
          });
            // if (password!==""&&){

            // }
            updateUserDetails();
          }).catch((error) => {
              console.log("hi")
                console.log(error);
                // this.showError(error.message);
            });

        } else {
          console.log(error);
          alert("user not found")
            // this.showError("User not found ..!");    
        }
  
    });
}
function updateUserDetails(){
  apiCall('updateCustomerDetails','POST',{     
    user_id:userId,   
    email: email,
    password: newPassword,
    name:yourName,
    phone: mobileNo,
    country_calling_code: countryCallingCode,
    address:addressLine1+" "+addressLine2}).then((responseJson)=>console.log(responseJson))
}
  function getCustomerDetails(){
    apiCall('getCustomerDetails','POST',{user_id:global.memberId})
    .then(responseJson=>{
      console.log(responseJson)
      setCountryCallingCode(responseJson.country_calling_code)
      // setUserName(responseJson.)
      setEmail(responseJson.email)
      setYourName(responseJson.name)
      setMobileNo(responseJson.phone)
      setAddressLine1(responseJson.address)
      setAddressLine2(responseJson.address)
      setUserId(responseJson.id)
      setPassword(responseJson.password)
      // setselectedCountry()
    })      .catch((error) => console.error(error));
  }
  function setCountry(itemValue) {
    setselectedCountry(itemValue);
    setCountryCallingCode(itemValue)
  }
  function getCountries() {
    apiCall("getCountryList", "GET")
      .then((responseJson) => {
        // console.log(responseJson);
        setCountries(responseJson);
      })
      .catch((error) => console.error(error));
  }
  console.log(newPassword)
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Account</Text>
          <View style={styles.lineStyle} />
        </View>
        <Image
          source={require("../assets/Images/blank-profile-picture-973460_960_720.png")}
          style={styles.image}
        />
        <Text style={[styles.textStyle, { textAlign: "center" }]}>Profile</Text>
        {/* <TextInput
          style={styles.textInputStyle}
          placeholder="User Name"
          onChangeText={setUserName}
        /> */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
          onChangeText={setEmail}
          value = {email}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your Name"
          onChangeText={setYourName}
          value = {yourName}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Address Line 1"
          onChangeText={setAddressLine1}
          value = {addressLine1}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Address Line 2"
          onChangeText={setAddressLine2}
          value = {addressLine2}
        />
        {/* <TextInput style={styles.textInputStyle} placeholder="Address Line 2" onChangeText={value=>setObj({...obj,email:value})}/> */}
        <View style={styles.textView}>
          <Text
            style={[
              styles.textInputStyle,
              { width: 100, textAlign: "center", marginLeft: 15 },
            ]}
          >
            Country
          </Text>
          <View style={{ borderColor: "black" }}>
            <Picker
              selectedValue={selectedCountry}
              style={{ height: 50, width: 150, borderColor: "blue" }}
              onValueChange={(itemValue) => setCountry(itemValue)}
            >
              {countries?.map((option) => (
                <Picker.Item
                  key={option.id}
                  label={option.name}
                  value={option.calling_code}
                />
              ))}
            </Picker>
            {/* <Text>Selected value: {selectedCountry}</Text> */}
          </View>
        </View>
        <View style={styles.mobileNo}>
          <Text>+{countryCallingCode}</Text>
          {/* <AntDesign name="search1" size={25} color="black" /> */}
          <TextInput
            style={styles.mobileTextInputStyle}
            placeholder="Mobile No"
            onChangeText={setMobileNo}
            autocomplete="off"
            value={`${mobileNo}`}
          />
        </View>
        <TouchableOpacity
          // activeOpacity={0.6}
          style={styles.pressableStyle}
          // onPress={onPress}
        >
          <Text style={styles.pressableText}>Verify the Number</Text>
        </TouchableOpacity>
        <View style={styles.codeView}>
          <Text
            style={[
              styles.textInputStyle,
              { width: 150, textAlign: "center", marginLeft: 15 },
            ]}
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
        <Text style={styles.textStyle}>Change my password</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Old password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
                <TextInput
          style={styles.textInputStyle}
          placeholder="New password"
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Confirm new password"
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          // activeOpacity={0.6}
          style={[styles.pressableStyle, { width: 70 }]}
          // onPress={onPress}
        >
          <Text
            style={styles.pressableText}
            onPress={() => {
              handleSubmit();
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
        {/* <Select>hi</Select> */}
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
    // justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    height: 45,
    // margin: 7,
    marginBottom:0,
    borderWidth: 1,
    padding: 7,
    paddingBottom:0,
    width: 350,
    borderRadius: 10,
  },
  lineStyle: {
    marginHorizontal: 20,
    paddingTop: 0,
    top: 15,
    borderWidth: 1.3,
    borderColor: "white",
    // margin: 30,
    marginBottom: 20,
    marginTop: 0,
  },
  pickerView: {
    borderColor: "black",
    backgroundColor: "blue",
  },
  // picker:{
  //   alignSelf:'center'
  // },
  mobileNo: {
    // backgroundColor:'blue',
    alignSelf: "center",
    width: 350,
    marginHorizontal: 10,
    // justifyContent: "space-around",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // borderRadius: 10,
    padding: 0,
    paddingLeft:10,
    margin: 7,
    borderRadius: 10,
    borderWidth: 1,
    
    // backgroundColor: "grey",
  },
  mobileTextInputStyle: {
    alignSelf: "center",
    height: 35,
    // margin: 7,
    // borderWidth: 1,
    padding: 7,
    width: 275,
    // margin: 7,
    // borderWidth: 1,
    // borderRadius: 10
  },
  textnputStyle: {
    alignSelf: "center",
    height: 35,
    margin: 7,
    borderWidth: 1,
    padding: 7,
    width: 350,
    borderRadius: 10,}
});
export default RegisterScreen;

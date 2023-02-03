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
import { APP_URL } from "../constants/App";
import RNFetchBlob from "rn-fetch-blob";
import { apiCall } from "../Utils";

// const options = [
//   { country: "Option 1", id: "option1" },
//   { country: "Option 1", id: "option1" },
// ];

function RegisterScreen({ navigation }) {
  useEffect(() => {
    getCountries();
  }, []);
  // useEffect(()=>{}
  //   getData();
  // },[]);

  const [selectedCountry, setselectedCountry] = useState("option1");
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
  const [countryId,setCountryId]=useState("")
  // const [id,setId]
  // const [code1,setCode1] = useState("")
  // const [code2,setCode2] = useState("")
  // const [code3,setCode3] = useState("")
  // const [code4,setCode4] = useState("")
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) == false) {
      alert("Invalid Email Address..!");
      return false;
    // } else if (userName == "") {
    //   alert("Please enter a user name..!");
    //   return false;
    } else if (password == "") {
      alert("Please enter a password..!");
      return false;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long..!");
      return false;
    } else if (confirmPassword == "") {
      alert("Please enter a confirm password..!");
      return false;
    } else if (password != confirmPassword) {
      alert("Password and confirm password not match..!");
      return false;
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
      createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
          // console.log(userCredential.user.uid);
          createUserDetails(userCredential.user.uid);
        })
        .catch((error) => {
          if (error.code == "auth/invalid-email") {
            alert("Invalid Email Address..!");
          }
          if (error.code == "auth/email-already-in-use") {
            alert("Email already in use..!");
          } else {
            alert(error);
          }
        });
    }
    
    const createUserDetails = (userId) => {
      const userDetails = {
        email: email,
        password: password,
        // name:yourName,
        phone: mobileNo,
        country_calling_code: countryCallingCode,
        firebase_user_id: "",
        address:addressLine1+" "+addressLine2
      };
      // console.log(userId)
      apiCall("register", "POST", { ...userDetails, firebase_user_id: userId })
        .then((responseJson) => {
          console.log(JSON.stringify(responseJson));
          if (responseJson[0] == "saved") {
            global.memberId = responseJson[1];
            global.memberName = responseJson[2];
            // setId(responseJson[1])
            // setName(responseJson[2])
            alert("Registered successfully. Welcome to TripToster");
            setTimeout(() => {
              navigation.navigate("MainBottomNavigator");
            }, 2000);
          } else {
            console.log("Not successful");
            // this.showError("error..!");
          }
        })
        .catch((error) => {
          console.log(error);
          // this.showError("error..!");
        });
    };
  };

  // function createUserDetails(userID){
  //   RNFetchBlob.fetch('POST', APP_URL+'register', {
  //       Authorization: "Bearer access-token",
  //       otherHeader: "foo",
  //       'Content-Type': 'multipart/form-data',
  //   }, [
  //       { name: 'email', data: email },
  //       { name: 'password', data: password },
  //       { name: 'name', data: yourName },
  //       // { name: 'user_surname', data: yourName },
  //       { name: 'mobile_no', data: mobileNo },
  //       // { name: 'country_id', data: country_id+"" },
  //       { name: 'firebase_user_id', data: userID },
  //       // { name: 'Address', data: addressLine1+addressLine2 },
  //   ])
  //   .then(response => response.json())
  //   .then((responseJson)=>{
  //     console.log(responseJson)
  //   })
  //   //   response.json())
  //   // .then((responseJson) => {
  //       // console.log(JSON.stringify(responseJson));
  //       // if(responseJson[0]=="saved"){
  //       //   // //  global.id = responseJson[1];
  //       //   // //  global.name = responseJson[2];
  //       //   // setId(responseJson[1])
  //       //   // setName(responseJson[2])
  //       //   //   alert("Registered successfully.")
  //       //   //   setTimeout(()=>{
  //       //   //       this.props.navigation.navigate("Home");
  //       //   //   }, 2000);
  //       // } else {
  //       //     // this.showError("error..!");
  //       // }
  //   // })
  //   .catch((error) => {
  //       console.log(error);
  //       // this.showError("error..!");
  //   });
  //   }
  // }
  // function getData(){
  //   fetch(APP_URL+'data',{
  //     method:'GET',
  //     headers:{
  //       // 'Authorization:"Bearer access-token",
  //       'Accept':'application/json',
  //       'Content-Type':'application/json',
  //     },
  //     // body:JSON.stringify({
  //     //   email:email,
  //     //   // password:password,
  //     //   name:yourName,
  //     //   mobile_no:mobileNo,
  //     //   firebase_user_id:userID
  //     // })
  //   }).then(response => response.json())
  //   .then((responseJson)=>{
  //     console.log(responseJson)
  //   }).catch(error => console.error(error));
  // }
  function setCountry(itemValue) {
    setselectedCountry(itemValue);
    setCountryCallingCode(itemValue)
    // setCountryId(itemValue)
  }
  function getCountries() {
    apiCall("getCountryList", "GET")
      .then((responseJson) => {
        console.log(responseJson);
        setCountries(responseJson);
        // responseJson.forEach(element => {
        //   console.log(element.name);
        // });
      })
      .catch((error) => console.error(error));
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
        {/* <TextInput
          style={styles.textInputStyle}
          placeholder="User Name"
          onChangeText={setUserName}
        /> */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your Name"
          onChangeText={setYourName}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Address Line 1"
          onChangeText={setAddressLine1}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Address Line 2"
          onChangeText={setAddressLine2}
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
            plca
            onChangeText={setMobileNo}
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
        <Text style={styles.textStyle}>Create password</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Confirm password"
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

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function LoginScreen({navigation}) {
  // let list1=[[Ionicons,'logo-google'],[AntDesign,'apple1'],[AntDesign,'twitter'],[EvilIcons,'sc-facebook']]
  return (
    <View style={styles.viewStyle}>

      <Image style={styles.logo} source={require('../assets/Images/login.png')} />
      <View style={styles.view1Style}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Username or Mobile Number"
        />
        <TextInput style={styles.textInputStyle} placeholder="Password" />

        <View style={styles.view2Style}>
          <TouchableOpacity
            // activeOpacity={0.6}
            style={styles.pressableStyle}
            // onPress={onPress}
          >
            <Text style={styles.pressableText} >Login</Text>
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
        <View styles={styles.view5Style}>
          <Text style={styles.text2}>New to Triptosters?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
            <Text style={styles.text2}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
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
    backgroundColor: '#000000',
    right: 5,
    margin: 12,
    width: 80,
    margin: 2,
    padding: 2,
    borderRadius: 10,
    alignSelf: 'flex-end',
    right: 20,
    top: 10,
    height: 30,

    // alignItems:'flex-end'
  },
  pressableText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    margin: 1,
  },
  textInputStyle: {
    alignSelf: 'center',
    height: 35,
    margin: 7,
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 10,
  },
  logo: {
    // flex:3,
    position: 'absolute',
    top: 20,
    // height:40
    alignSelf: 'center',
  },
  lineStyle: {
    top: 30,
    borderWidth: 1.3,
    borderColor: 'black',
    margin: 30,
    marginBottom:70
  },
  text1: {
    color: 'grey',
    fontSize: 20,
    textAlign: 'center',
  },
  view3Style: {
    // flex:1,
    alignItems: 'center',
    // justifycontent:'center',
    borderRadius: 30,
    borderWidth: 1,
    width: 49,
    padding: 3,
    height: 49,
    margin: 10,
  },
  view4Style: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    top: 3,
  },
  text2: {
    top: 80,
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
  },
  view5Style: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
});

export default LoginScreen;

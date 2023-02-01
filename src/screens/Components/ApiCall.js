import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {APP_URL} from '../../constants/App';
// export default function ApiCall() {
export const apiCall = (url,method,obj)=>{
        fetch(APP_URL+url,{
          method:method,
          headers:{
            // 'Authorization:"Bearer access-token",
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(obj)
        }).then(response => response.json())
        .then((responseJson)=>{
          console.log(responseJson)
        }).catch(error => console.error(error));
      }
// }

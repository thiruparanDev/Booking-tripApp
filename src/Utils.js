import {APP_URL} from './constants/App';

export const apiCall = (url,method,obj)=>{
    const response = fetch(APP_URL+url,{
      method:method,
      headers:{
        // 'Authorization:"Bearer access-token",
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(obj)
    }).then(response => response.json())
    // .then((responseJson)=>{
    //   console.log(responseJson)
    // })
    .catch(error => console.error(error));
    return response;
  }
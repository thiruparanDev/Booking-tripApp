// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGqf2o76V1G6AM0xVpx8Sl397Gxybnx40",
  authDomain: "triptosters.firebaseapp.com",
  projectId: "triptosters",
  storageBucket: "triptosters.appspot.com",
  messagingSenderId: "628038286623",
  appId: "1:628038286623:web:276dd165ac0fa7349f842a",
  measurementId: "G-PSXLNKC0K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
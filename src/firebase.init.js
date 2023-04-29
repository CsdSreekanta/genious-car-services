// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb0ZEtYEdMzb0NTRrBE3xL93MgEtBlcFo",
  authDomain: "genious-car-services-fe235.firebaseapp.com",
  projectId: "genious-car-services-fe235",
  storageBucket: "genious-car-services-fe235.appspot.com",
  messagingSenderId: "595594979442",
  appId: "1:595594979442:web:3bbc71e6502aeba51ffaeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export default auth;
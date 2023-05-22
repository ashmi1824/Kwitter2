 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzCRMAov15uLcDKebJVG6z6pdUA5V2Lyk",
  authDomain: "ashmi-94c88.firebaseapp.com",
  projectId: "ashmi-94c88",
  storageBucket: "ashmi-94c88.appspot.com",
  messagingSenderId: "779325195266",
  appId: "1:779325195266:web:f3d99386debc60920f531b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
 function logout(){
    
    window.location = "index.html";
}

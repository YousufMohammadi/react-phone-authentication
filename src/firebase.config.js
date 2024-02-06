// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqKuyW199yVftbvohAwyIvkBalP9y7QJA",
  authDomain: "react-phone-authenticati-ab24c.firebaseapp.com",
  projectId: "react-phone-authenticati-ab24c",
  storageBucket: "react-phone-authenticati-ab24c.appspot.com",
  messagingSenderId: "1089242554947",
  appId: "1:1089242554947:web:0de5efc1a9f3f567096af6",
  measurementId: "G-9N36QD3MDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
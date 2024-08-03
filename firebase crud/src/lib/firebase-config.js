
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7brEMdnMf-HGNayX197fgvLhBx0Q16Pc",
  authDomain: "fir-crud-26d9f.firebaseapp.com",
  projectId: "fir-crud-26d9f",
  storageBucket: "fir-crud-26d9f.appspot.com",
  messagingSenderId: "1037686484882",
  appId: "1:1037686484882:web:2fea559b4e111e12dd9b4b",
  measurementId: "G-XP179E47V9"
};

const firebaseConfigApp = initializeApp(firebaseConfig);
export default firebaseConfigApp
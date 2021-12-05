import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CountriesContextProvider } from './context/countriesContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt1CHkVAGQVkd5Jvjq8x95L6ov68kA2Xo",
  authDomain: "itec4012-doaaidris-countries.firebaseapp.com",
  projectId: "itec4012-doaaidris-countries",
  storageBucket: "itec4012-doaaidris-countries.appspot.com",
  messagingSenderId: "520387977110",
  appId: "1:520387977110:web:bc8a2f5890f0ef5bfe47b7",
  measurementId: "G-D4JDGFJ9NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <CountriesContextProvider>
    <App />
  </CountriesContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

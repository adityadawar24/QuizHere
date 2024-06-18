// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8CnS1KjMTHIiVZjNi_MlHM97oaL1QQ4",
  authDomain: "auth-43847.firebaseapp.com",
  projectId: "auth-43847",
  storageBucket: "auth-43847.appspot.com",
  messagingSenderId: "640076767030",
  appId: "1:640076767030:web:866d94b3b7a74d6e759d97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getAuth(app);

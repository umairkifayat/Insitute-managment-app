import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAy_DAdguO1RqEGxVj3wsk9PQLkuo149Nc",
  authDomain: "insitute-mangement-system.firebaseapp.com",
  projectId: "insitute-mangement-system",
  storageBucket: "insitute-mangement-system.appspot.com",
  messagingSenderId: "1026888693322",
  appId: "1:1026888693322:web:0a0d2ddddc07ea55f698b3",
  measurementId: "G-CB5VXMVXQ0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);

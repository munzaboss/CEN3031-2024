// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cen3031-cooking-website.firebaseapp.com",
  projectId: "cen3031-cooking-website",
  storageBucket: "cen3031-cooking-website.appspot.com",
  messagingSenderId: "866186810186",
  appId: "1:866186810186:web:2b722bf1350ad56301e7b3",
  measurementId: "G-R4RZ6KL2T0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);



function createUser(userID, name, email, image){
  const db = getDatabase(firebaseApp);
  const reference = 'users/' + userID;
  set(reference, {
    uid: userID,
    name: name,
    email: email,
    userImage: image
  });
}

export { createUser }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhZMHGyFyq8Cd3LpqhKqUTjVm77Q-58-s",
  authDomain: "cen3031-cooking-website.firebaseapp.com",
  projectId: "cen3031-cooking-website",
  storageBucket: "cen3031-cooking-website.appspot.com",
  messagingSenderId: "866186810186",
  appId: "1:866186810186:web:2b722bf1350ad56301e7b3",
  measurementId: "G-R4RZ6KL2T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Realtime database stuff
function writeUserData(userID, name, email){
  const db = getDatabase();
  const reference = ref(db, 'users/' + userID)
  
  set(reference, {
    username: name,
    email: email,
  });
}

writeUserData('4tk4', 'Munedfdeb', 'bruh@mail')
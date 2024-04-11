import { useEffect } from 'react';
import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';




const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "cen3031-cooking-website.firebaseapp.com",
    projectId: "cen3031-cooking-website",
    storageBucket: "cen3031-cooking-website.appspot.com",
    messagingSenderId: "866186810186",
    appId: "1:866186810186:web:2b722bf1350ad56301e7b3",
    measurementId: "G-R4RZ6KL2T0"
  };
  

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function Login() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            navigate("/");
            console.log("Login succesful");
        } catch (error) {
            console.log("Login Failed", error.code, error.message)
        }
    }
    return (
        <div>
            <h1> Login Page </h1>
            <button className="submitButton" onClick= {handleLogin}> Login </button>
        </div>
    );
}

export default Login

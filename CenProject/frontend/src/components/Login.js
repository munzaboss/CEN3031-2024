
//import { useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; // Make sure this path is correct to include your styles
import googlelogo from '../images/google.png';

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

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigate("/"); // Redirect to home if already logged in
  //     }
  //   });
  // }, [navigate]);

  const handleLogin = async () => {
      console.log("logging in");
      try{
          console.log("Current User: ", auth.currentUser);
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider);

          //preparing the data to be posted to backend
          const userData = {
              userID: result.user.uid,
              name: result.user.displayName,
              email: result.user.email,
              image: result.user.photoURL

          }

          //backend call. IF user exists do nothing, if doesnt exist create the database entry

          const isUserExist = await axios.get(`http://localhost:8000/checkUser?userID=${userData.userID}` )
          console.log("isUserExst: ", isUserExist.data)

          if(!isUserExist.data){
            const createUserResponse = await axios.post('http://localhost:8000/createUser', userData)
            console.log( createUserResponse.data );
          }

          console.log("Current User: ", auth.currentUser);
          navigate("/");
          console.log("Login succesful");
      } catch (error) {
          console.log("Login Failed", error.code, error.message)
      }
    }

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Welcome back!</h1>
        <div className="google-btn" onClick={handleLogin}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src={googlelogo} alt="Google sign-in" />
          </div>
          <p className="btn-text"><b>Sign in with Google</b></p>
        </div>
      </div>
    </div>
  );
};


export default Login;

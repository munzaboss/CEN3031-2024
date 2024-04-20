import "../style/NavBar.css"
import {Link, useSearchParams} from 'react-router-dom'
import logo from "../images/logo.ico"
import { getAuth, signOut } from "firebase/auth"
import { useState, useEffect } from "react"


const NavBar = () => {
  
  const auth = getAuth();
  // auth.current user is null if no one is signed in
  const [user, setUser] = useState(auth.currentUser)

  //handles logout using firebase signout funciton
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch(error) {
      console.log('Logout failed', error);
    }
  }

  return (
    <div className="nav-container">

      <div className="nav-title">
        <h4>Pixel<b>Palate</b></h4>
      </div>

      <div className="nav-logo">
        <img style={{height: "50px", width: "70px"}} src={logo}></img>
      </div>

      <div className="nav-links">
        <span><Link to="/" className="nav-link-style">Home</Link></span>
        <span><Link to="/myRecipes" className="nav-link-style">My Recipes</Link></span>
        <span><Link to="/geoGuesser" className="nav-link-style">GeoGuesser Food</Link></span>
        {user ? (
          // Render user profile and logout link if user is logged in
          <div className="user-profile">
            <img style={{ height: '50px', width: '50px', borderRadius: '50%'}} src={user.photoURL} alt="Profile" />
            <button className="nav-link-style" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          // Render login link if user is not logged in
          <span><Link to="/login" className="nav-link-style">Login</Link></span>
        )}
      </div>



    </div>
  );
}

export default NavBar;
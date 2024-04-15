import "../style/NavBar.css"
import {Link} from 'react-router-dom'
import logo from "../images/logo.ico"


const NavBar = () => {


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
        <span><Link to="/login" className="nav-link-style">Login</Link></span>
      </div>



    </div>
  );
}

export default NavBar;
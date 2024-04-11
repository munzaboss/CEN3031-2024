import "../style/NavBar.css"
import {Link} from 'react-router-dom'


const NavBar = () => {


  return (
    <div className="nav-container">

      <div className="nav-logo">
        <span>Logo</span>
      </div>

      <div className="nav-title">
        <span>WebSite Title</span>
      </div>

      <div className="nav-links">
       
        <span><Link to="/" className="nav-link-style">Home</Link></span>
        <span><Link to="/myRecipes" className="nav-link-style">My Recipies</Link></span>
        <span><Link to="/geoGuesser" className="nav-link-style">GeoGuesser Food</Link></span>
      </div>



    </div>
  );
}

export default NavBar;
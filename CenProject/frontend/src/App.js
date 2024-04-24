import Search from './components/search';
import SideBar from './components/sideBar';
import NavBar from './components/NavBar'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css'

//take in props from index.js
const App = ({user, setUser, savedRecipes, setSavedRecipes}) =>{

    //sets up the initial home page 
    return (
      <div>
        <NavBar user={user} setUser={setUser}/>
        <div className="App">
          <SideBar savedRecipes = {savedRecipes} setSavedRecipes = {setSavedRecipes} user = {user}/> 
          <Search savedRecipes = {savedRecipes} setSavedRecipes={setSavedRecipes} user = {user} setUser = {setUser}/>
        </div> 
      </div>
     
    );
  }
//console.log(user, setUser)
export default App;

import Search from './components/search';
import SideBar from './components/sideBar';
import NavBar from './components/NavBar'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css'


//Referenced tutorial: https://www.geeksforgeeks.org/reactjs-router/ 
const App = () =>{
    return (

      <div>
        <NavBar/>
        <div className="App">
          <SideBar /> 
          <Search/>
        </div> 
      </div>
     
     
    );
  }

export default App;
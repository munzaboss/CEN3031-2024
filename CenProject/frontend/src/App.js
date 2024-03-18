

import Search from './components/search';
import SideBar from './components/sideBar';
import FoodCard from './components/FoodCard';
import FoodInfo from './components/FoodInfo';
import Login from './components/Login';
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from 'react'


function HomePage() {
  return (
    <>
      <SideBar/>
      <Search/>
      <FoodCard/>
      <FoodInfo/>
    </>
  );
}

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path = '/login' Component={Login}/>
        <Route path = '/' Component={HomePage}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;

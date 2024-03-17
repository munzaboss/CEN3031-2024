import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //stores location in browser's address bar using URLs
import FoodCard from './components/FoodCard';
import FoodInfo from './components/FoodInfo';
import Search from './components/search';
import SideBar from './components/sideBar';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';

//Referenced tutorial: https://www.geeksforgeeks.org/reactjs-router/ 
const App = () =>{
    return (
      <Router>
        <div className="App">
          <SideBar /> /* Rendered outside the router so it appears on every page instead of just the homepage */
        <Routes>
          <Route path="/" element={<Search/>}></Route>
          <Route path="/" element={<FoodCard/>}></Route>
          <Route path="/" element={<FoodInfo/>}></Route>
        </Routes>
      </div>
      </Router>
    );
  }

export default App;

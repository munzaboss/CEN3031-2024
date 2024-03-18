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
        <div className="App">
          <SideBar /> 
          <Search></Search>
          {/* <Route path="/" element={Search} />
          <Route path="/" element={FoodCard} />
          <Route path="/" element={FoodInfo} /> */}
        </div>
    );
  }

export default App;
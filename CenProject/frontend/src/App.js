

import Search from './components/search';
import SideBar from './components/sideBar';
import FoodCard from './components/FoodCard';
import FoodInfo from './components/FoodInfo';
import Login from './components/Login';
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from 'react'

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
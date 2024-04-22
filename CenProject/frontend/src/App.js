import Search from './components/search';
import SideBar from './components/sideBar';
import NavBar from './components/NavBar'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { getAuth } from 'firebase/auth'
import React, { useState, useEffect } from 'react';
import axios from 'axios'


//Referenced tutorial: https://www.geeksforgeeks.org/reactjs-router/ 
//wrap the below 4 props to be passed up to index.js (parent class)
const App = ({user, setUser}) =>{
    const auth = getAuth();
    //const [user, setUser] = useState(auth.currentUser)
    const [savedRecipes, setSavedRecipes] = useState([]) //initially set to empty array so you need to initialize

    useEffect(() => {
      console.log('Current user on page load:', user)
      const auth = getAuth();
      const change = auth.onAuthStateChanged((user) => {
        setUser(user);
      }); 
      return () => {
        change();
      };
    }, [auth, user]); //pass auth and user since this deals with user authentication
      useEffect(() => {
          const fetchSavedRecipes = async () => {
              if (user){
                  try {
                      console.log(auth.currentUser.uid)
                      const response = await axios.get(`http://localhost:8000/getSavedRecipes?userID=${auth.currentUser.uid}`);
                      if (response.data && response.data.recipes) {
                          setSavedRecipes(response.data.recipes);
                      } else {
                          setSavedRecipes([]);
                      }
                  } catch (error) {
                      console.log("Error in fetching saved recipes: ", error)
                  }
              } else {
                  setSavedRecipes([]);
              }
  
          };
          if (user) {
              fetchSavedRecipes();
          } else {
              console.log('user is null')
              setSavedRecipes([]);
          }
          
      }, [user, auth, savedRecipes]);  //additionally pass savedRecipes since saved recipes are being fetched
    return (

      <div>
        <NavBar user={user} setUser={setUser}/>
        <div className="App">
          <SideBar savedRecipes = {savedRecipes}/> 
          <Search savedRecipes = {savedRecipes} setSavedRecipes={setSavedRecipes} user = {user} setUser = {setUser}/>
        </div> 
      </div>
     
    );
  }
//console.log(user, setUser)
export default App;

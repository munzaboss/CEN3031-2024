import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GeoGuesser from './components/GeoGuesser';
import MyRecipes from './components/MyRecipes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import {useState} from 'react';

//Wrapper function to wrap the App component and pass props from App to the child components 
function Wrapper({children, user, setUser, savedRecipes, setSavedRecipes}){
  return (
    //cloneElement to clone the passed props for the children classes to also access them
   React.cloneElement(children, {user, setUser, savedRecipes, setSavedRecipes})
  );
}
const Index = () => {
  const [user, setUser] = useState(null);  //changes during the login process
  const [savedRecipes, setSavedRecipes] = useState([]); //redeclared in index.js (parent class) to effectively pass down to child
  //Wrapper component used to wrap all propps and pass them to the child components 
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Wrapper
          user={user}
          setUser = {setUser}   //set after the login process - i think thats why it is yellow? same with setSavedRecipes?
          savedRecipes = {savedRecipes}
          setSavedRecipes = {setSavedRecipes}> 
            <App />
          </Wrapper> //props wrapped from App.js and then passed back to App.js 
      ),
    }, 
    {
      path: "geoGuesser",
      element: (
        <Wrapper
          user={user}
          savedRecipes={savedRecipes}>
            <GeoGuesser />
          </Wrapper>  //GeoGuesser.js needs access to the user and savedRecipes props due to game implementation
    ),
    },
    {
      path: 'login',
      element: (
        <Wrapper
          user={user}
          setUser={setUser}>
            <Login />
          </Wrapper>  //Login.js needs access to the user and setUser props during the sign-in process
        )
    },
    {
      path:"myRecipes",
      element: (
      <Wrapper 
        user={user}
        savedRecipes={savedRecipes}>
          <MyRecipes />
        </Wrapper> //MyRecipes.js needs access to the user and savedRecipes props when viewing recipes that are saved
      ),

    },
    
  ]);
  //render the application and initialize the RouterProvider using the root node
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(
      <RouterProvider router={router} />
  );
}
//Index root component - rendering
ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
// =======
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   }, 
//   {
//     path: "geoGuesser",
//     element: <GeoGuesser/>
//   },
//   {
//     path: 'login',
//     element: <Login/>
//   },
//   {
//     path:"myRecipes",
//     element: <MyRecipes/>
//   }
  
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <RouterProvider router={router} />
// );

// >>>>>>> main

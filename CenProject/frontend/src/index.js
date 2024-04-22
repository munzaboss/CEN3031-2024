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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "geoGuesser",
    element: <GeoGuesser/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path:"myRecipes",
    element: <MyRecipes/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


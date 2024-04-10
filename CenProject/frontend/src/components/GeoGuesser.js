import React from 'react';
import "../style/GeoGuesser.css"
import NavBar from "./NavBar"
import { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api';

const KEY = process.env.REACT_APP_API_MAP_KEY
const KEY2 = process.env.REACT_APP_API_KEY
const libraries = ['places'];
const mapContainerStyle = {
  width: '70vw',
  height: '100vh',
};
const center = {
  lat: 37.090240, // default latitude
  lng: -95.712891, // default longitude
}


//TO GET THE LAT AND LNG FROM GPT 
// https://www.npmjs.com/package/react-geocode

const GeoGuesser = () => {

  const [backendData, setBackendData] = useState([{}])
  const [marker, setMarker] = useState([])
  const [path, setPath] = useState([])
  const [revealAnswer, setAnswer] = useState(false)
  const [foodBool, setFoodBool] = useState(false)
  const [ingredient, setIngredient] =  useState("NULL")
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: KEY,
    libraries,
  });
  

  

  const getNewIngredient = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KEY2}&number=1`)
    const results = await data.json()
    const food = results.recipes[0].extendedIngredients.filter( (object) => {
      return object.aisle === "Produce"
    })

    if (food.length !== 0) {
      setIngredient(food[0].name)
    }

    //then make an API call to chat GPT asking where it came from - Do this on Tuesday 

    // then make an API call to get the lat and long coordinates using google maps API - Do this on wednesday 

    // then set the answer marker to those coordinates - Do this on Thursday 
    
    // wrap up on friday 

  }

  useEffect( () => {
    getNewIngredient()
    fetch("http://localhost:8000/api").then(
      response => response.json() 
    ).then(
      data => {
        console.log(data)
      }
    )
    
  
  }, [])

  const onMapClick = (e) => {

    if (!revealAnswer) {
      setMarker([
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      ]);
    }
  }

  const handleSubmit = () => {

    setAnswer(true)
    setPath(
      [
        {lat: 37.090240, lng: -95.712891},
        {lat: marker[0].lat, lng: marker[0].lng}
      ]
    )
  }


  // const handleUserSubmit = () => {
  //   if (revealAnswer) {
  //     setAnswer(false)
  //   }

  //   else {
  //     setAnswer(true)
  //   }
  // }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (

    <div>

      <NavBar/>

    <div className="geoGuesserContainer">

      <div className="questionsSideBar">
        <button onClick={handleSubmit}>Submit Answer</button>
        <button onClick={getNewIngredient}>Get New Recipe</button>
        {ingredient}
      </div>

      <div className="mainMap">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={4}
          center={center}
          onClick={onMapClick}
        >

        {marker.map((marker, index) => (
          <Marker 
            key={index}
            position={{ 
              lat: marker.lat,
              lng: marker.lng 
            }} />
        ))}

        {revealAnswer ? <Marker position={center} icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"/> : null}

        
        <Polyline
          path={path}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} 
          />

        </GoogleMap>
      </div> 

      

      

      {/* <div className="mainMap">Yoo</div> */}

    </div>

    </div>

   
  );
};

export default GeoGuesser;
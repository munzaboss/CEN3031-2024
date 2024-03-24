import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

/* Need to revisit this to implement this differently*/
const FoodInfo = () => {
    const {foodID} = useParams();  //grab route parameters from the Route
    const [foodInfo, setFoodInfo] = useState(null); //constant variables set to null at the start
    useEffect(() => {
        const apiKey =  process.env.REACT_APP_API_KEY;
        const apiURL = `https://api.spoonacular.com/food/${foodID}/information?apiKey=${apiKey}`; //link to Spoonacular API docs
        axios.get(apiURL)
            .then(response => {
                setFoodInfo(response.data); //store the user's data
                //useEffect hook will make the function run every time the page loads
            })
            .catch(error => {
                console.error("Error fetching information:", error); //error if the link was not accessed or if page didn't load correctly
            });
    }, [foodID]);
    return (
        <div>
            <h2>{foodInfo.title}</h2>
            <p>{foodInfo.description}</p>
        </div>
    );
};
export default FoodInfo;

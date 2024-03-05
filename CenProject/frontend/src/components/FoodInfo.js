import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const FoodInfo = () => {
    const {foodID} = useParams();  //grab route parameters from the Route
    const [foodInfo, setFoodInfo] = useState(null);
    useEffect(() => {
        const apiKey = "API_KEY";
        const apiURL = "https://api.spoonacular.com/food/${foodID}/information?apiKey=${apiKey}";
        axios.get(apiURL)
            .then(response => {
                setFoodInfo(response.data);
            })
            .catch(error => {
                console.error("Error fetching information:", error);
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

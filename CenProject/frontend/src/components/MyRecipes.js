import NavBar from "./NavBar"
import "../style/MyRecipes.css"
import UserRecipeCard from "./UserRecipeCard"
import car1 from "../images/img-1.jpeg"
import car2 from "../images/img-2.jpeg"
import car3 from "../images/img-3.jpeg"
import car4 from "../images/img-4.jpeg"
import car5 from "../images/img-5.jpeg"
import axios from 'axios'
import { getAuth } from 'firebase/auth'
import {useState, useEffect} from 'react'



const MyRecipes = ({user, savedRecipes, setSavedRecipes, setUser}) => {
    const IMAGES = [car1, car2, car3, car4, car5]
    const [text, setText] = useState("")

    console.log(savedRecipes[0])


    return (
        <div>
            <NavBar user={user} setUser={setUser}/>
        
            <div className="recipe-container">
                {savedRecipes.map((obj, key) => {
                    return (
                        <UserRecipeCard key={key} title={obj.recipeTitle} URL={obj.recipeLink} instructions={obj.instructions} summary={obj.summary} url={obj.recipeImage}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyRecipes
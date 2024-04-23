import NavBar from "./NavBar"
import "../style/MyRecipes.css"
import UserRecipeCard from "./UserRecipeCard"
import car1 from "../images/custom.png"
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
    const [displayAddCard, setDisplayAddCard] = useState(false)
    const [customTitle, setCustomTitle] = useState("")
    const [customLink, setCustomLink] = useState("")
    const [customInstructions, setCustomInstructions] = useState("")
    const [customSummary, setCustomSummary] = useState("")

    console.log(savedRecipes)


    console.log(savedRecipes[0])

    const handleDeleteRecipe = async (recipeID) => {
        try {
            // Backend call to delete recipe
            await axios.post(`http://localhost:8000/deleteRecipe`, { recipeID: recipeID, userID: user.uid });
            // Update saved recipes state after successful deletion
            setSavedRecipes(savedRecipes.filter(recipe => recipe.recipeID !== recipeID));

            console.log('Recipe deleted successfully');
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    }

    const handleNewCustomRecipe = async () => {

        const newRecipe = {
            userID: user.uid,
            recipeID: Math.floor(100000 + Math.random() * 900000), 
            recipeTitle: customTitle, 
            recipeImage: car1, 
            recipeLink: null,
            summary: customSummary, 
            instructions: customInstructions
        }

        await axios.post(`http://localhost:8000/saveRecipeTest`, newRecipe)
        window.location.reload()
    }

    const toggleAddNewRecipeButton = () => {
        if (displayAddCard) {
            setDisplayAddCard(false)
        }

        else {
            setDisplayAddCard(true)
        }
    }



    return (
        <div style={{paddingBottom: "60px"}}>
            <NavBar user={user} setUser={setUser}/>

            <button onClick={toggleAddNewRecipeButton} className="btn btn-primary" style={{marginLeft: "30px", marginTop: "30px"}}>Add New Recipe</button>
        
            <div className="recipe-container">


                {displayAddCard ? (
                    <div className={`custom-recipe-child d-flex flex-column border border-black justify-content-center align-items-center gap-2`} style={{padding: "0rem 2rem"}}> 
                        <div className="d-flex flex-row gap-5"> 
                            <div className="d-flex flex-column justify-content-center align-items-center"> 
                                <h3>Title</h3>
                                <input onChange={(e) => setCustomTitle(e.target.value)} placeholder="Easy Dinner" style={{maxWidth: "500px", minWidth: "500px"}}></input>
                            </div>
                            <button onClick={handleNewCustomRecipe} className="btn btn-success" style={{height: "40px", marginTop: "40px"}}>Add Recipe</button>
                        </div>
                        
                        <h3>Instructions</h3>
                        <textarea onChange={(e) => setCustomInstructions(e.target.value)} placeholder="Step One..." style={{maxWidth: "1300px", minWidth: "1300px", maxHeight: "200px", minHeight: "200px"}}></textarea>

                        <h3>Summary</h3>
                        <textarea onChange={(e) => setCustomSummary(e.target.value)} style={{maxWidth: "1300px", minWidth: "1300px", maxHeight: "200px", minHeight: "200px"}}></textarea>
                    </div>

                ) : null}


                {savedRecipes.map((obj, key) => {
                    return (
            <UserRecipeCard key={key} onDelete = {handleDeleteRecipe} recipeID = {obj.recipeID} title={obj.recipeTitle} URL={obj.recipeLink} instructions={obj.instructions} summary={obj.summary} url={obj.recipeImage} USER={user} recipeLink={obj.recipeLink}/>
                    )
                })}


            </div>
           
        </div>
    )
}

export default MyRecipes
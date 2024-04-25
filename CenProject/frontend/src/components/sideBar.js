import React from 'react'
import '../style/SideBar.css'
import UserRecipesOnSearch from "./userRecipesOnSearch"
import axios from 'axios'

const SideBar = ({savedRecipes, setSavedRecipes, user}) => {
    
    //condition to fix a map() error -> recommended by ChatGPT
    if (!savedRecipes || !Array.isArray(savedRecipes)){
        return <div>No saved recipes found</div>
    }

    //handles delete recipes on sidebar
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

    return (
        <div className="SideBar">

            <h3 className="SideBar-title">
                Saved Recipes
            </h3>

            {/* displays saved recipes  */}
            {savedRecipes.map((recipe) => {
                return(
                    <UserRecipesOnSearch
                        recipeID = {recipe.recipeID}
                        recipeImage = {recipe.recipeImage}
                        recipeTitle = {recipe.recipeTitle}
                        recipeLink = {recipe.recipeLink}
                        onDelete = {handleDeleteRecipe}
                    />
                )
            })}
        </div>
    )
}

export default SideBar

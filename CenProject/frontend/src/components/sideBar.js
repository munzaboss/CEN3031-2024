import React from 'react'
import '../style/SideBar.css'
import UserRecipesOnSearch from "./userRecipesOnSearch"

const SideBar = ({savedRecipes}) => {
    //condition to fix a map() error -> recommended by ChatGPT
    if (!savedRecipes || !Array.isArray(savedRecipes)){
        return <div>No saved recipes found</div>
    }

    return (
        <div className="SideBar">

            <h3 className="SideBar-title">
                Saved Recipes
            </h3>

            {savedRecipes.map((recipe) => {
                return(
                    <UserRecipesOnSearch
                        key = {recipe.recipeID}
                        recipeImage = {recipe.recipeImage}
                        recipeTitle = {recipe.recipeTitle}
                        recipeLink = {recipe.recipeLink}
                    />
                )
            })}

        </div>
    )
}

export default SideBar

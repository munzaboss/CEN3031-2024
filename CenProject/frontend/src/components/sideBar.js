import React from 'react'
import '../style/SideBar.css'

const SideBar = ({savedRecipes}) => {
    //if there are 0 saved recipes, tell that to the user
    if (!savedRecipes) {
        return <div className="SideBar">No Saved Recipes</div>;
    }
    //add number of saved recipes once the user clicks "Save", and display the saved recipe
    //map() maps list items (recipes) and their respective key values (index) 
    return (
        <div className="SideBar">
            This is where my saved recipes will show up!
            {savedRecipes.length} Saved Recipe(s) currently.
            <ul>
            {savedRecipes.map((recipe, index) => (
                <li key={index}>
                    <div>
                        <img src={recipe.img} alt={recipe.linkToPage}/>
                        <h3>{recipe.title}</h3>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        
        
    )
}

export default SideBar

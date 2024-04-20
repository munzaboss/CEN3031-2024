import React from 'react'
import '../style/SideBar.css'
import car1 from "../images/img-1.jpeg"
import car2 from "../images/img-2.jpeg"
import car3 from "../images/img-3.jpeg"
import car4 from "../images/img-4.jpeg"
import car5 from "../images/img-5.jpeg"
import UserRecipesOnSearch from "./userRecipesOnSearch"

const SideBar = () => {
    //TO DO
    //THE FORMATING FOR INSTRUCTIONS STORED IN DATA BASE is incorrect and may cause issues. Must figure out how to retain
    //formatting data
    //
    //Must display correct stuff to sidebar.
    //need to make get calls to get stuff to post to sidebar
    //ned to make get calls to get stuff to post to my recipes
    //Ensure my recipes search function works as intended






    //if there are 0 saved recipes, tell that to the user
    // if (!savedRecipes) {
    //     return <div className="SideBar">No Saved Recipes</div>;
    // }
    // //add number of saved recipes once the user clicks "Save", and display the saved recipe
    // //map() maps list items (recipes) and their respective key values (index) 
    // return (
    //     <div className="SideBar">
    //         This is where my saved recipes will show up!
    //         {savedRecipes.length} Saved Recipe(s) currently.
    //         <ul>
    //         {savedRecipes.map((recipe, index) => (
    //             <li key={index}>
    //                 <div>
    //                     <img src={recipe.img} alt={recipe.linkToPage}/>
    //                     <h3>{recipe.title}</h3>
    //                 </div>
    //             </li>
    //         ))}
    //         </ul>
    //     </div>
    // )

    const IMAGES = [car1, car2, car3, car4, car5]
    return (
        <div className="SideBar">

            <h3 className="SideBar-title">
                Saved Recipes
            </h3>

            {IMAGES.map((link) => {
                return(
                    <UserRecipesOnSearch URL={link}></UserRecipesOnSearch>
                )
            })}




        </div>
    )
}

export default SideBar

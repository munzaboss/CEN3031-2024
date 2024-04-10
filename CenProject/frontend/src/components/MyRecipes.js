import NavBar from "./NavBar"
import "../style/MyRecipes.css"
import UserRecipeCard from "./UserRecipeCard"
import car1 from "../images/img-1.jpeg"
import car2 from "../images/img-2.jpeg"
import car3 from "../images/img-3.jpeg"
import car4 from "../images/img-4.jpeg"
import car5 from "../images/img-5.jpeg"
import {useState} from 'react'



const MyRecipes = () => {
    const IMAGES = [car1, car2, car3, car4, car5]
    const [text, setText] = useState("")
    /* Use fuse.js for the search bar to implement a fuzzy search*/

    return (
        <div>
            <NavBar/>

            <div className="d-flex justify-content-center mt-2">
                <input 
                    className="searchBar"
                    placeholder="Search Here"
                    onChange={(e) => setText(e.target.value)}
                    style={{ marginRight: '1rem', marginTop: "1rem"}}
                    />

                    {/*submit button*/}
                <button className="submitButton" style={{marginTop: "1rem"}}>submit</button>
            </div>
        

            <div className="recipe-container">
                {IMAGES.map((src) => {
                    return (
                        <UserRecipeCard URL={src}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyRecipes
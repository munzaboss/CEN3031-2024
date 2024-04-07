import NavBar from "./NavBar"
import "../style/MyRecipes.css"
import UserRecipeCard from "./UserRecipeCard"
import car1 from "../images/img-1.jpeg"
import car2 from "../images/img-2.jpeg"
import car3 from "../images/img-3.jpeg"
import car4 from "../images/img-4.jpeg"
import car5 from "../images/img-5.jpeg"



const MyRecipes = () => {
    const IMAGES = [car1, car2, car3, car4, car5]

    return (
        <div>
            <NavBar/>
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
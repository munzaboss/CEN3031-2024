import "../style/Search.css"
import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import FoodCard from "./FoodCard.js"
import Accordion from 'react-bootstrap/Accordion';
import { getAuth } from 'firebase/auth';
import axios from 'axios'




const Search = ({savedRecipes, setSavedRecipes, user, setUser}) => {

    const auth = getAuth();
    const KEY = process.env.REACT_APP_API_KEY
    const [text, setText] = useState("")
    const [checked, setChecked] = useState([])
    const [cards, setCards] = useState([])
    //states that deal with saving of recipes
    const saveRecipe = async (SelectedRecipe) => {
        console.log(SelectedRecipe.id);
        console.log(SelectedRecipe.idx);
        // console.log(savedRecipes);
        // setSavedRecipes((prevRecipes) => [...prevRecipes, recipe]);
        // console.log(savedRecipes)
        const recipe = cards[SelectedRecipe.idx]
        console.log("Recipe: ", recipe)
        console.log('RecipeID: ', recipe.id)

        try {
            console.log(auth.currentUser)
            const response = await axios.post('http://localhost:8000/saveRecipeTest', {
                userID: auth.currentUser.uid,
                recipeID: recipe.id,
                recipeTitle: recipe.title,
                recipeImage: recipe.image,
                recipeLink: recipe.links,
                summary: recipe.summary,
                instructions: recipe.instructions
            });
            console.log(response);
            if (response.status === 200) {
                console.log('Recipe saved successfully.');

                const savedRecipe = {
                    recipeID: recipe.id,
                    recipeImage: recipe.image,
                    recipeLink: recipe.links,
                    recipeTitle: recipe.title,
                    instructions: recipe.instructions,
                    summary: recipe.summary
                };
    
                // Manually update the savedRecipes state by adding the simplified saved recipe
                setSavedRecipes([...savedRecipes, savedRecipe]);

            } else {
                console.error('Failed to save recipe.');
            }
        } catch (error) {
            console.error('Error saving recipe:', error);
        }
    };

    /*handles clicks for the check box*/
    const handleCheckBox = (e) => {
        if (e.target.checked) {
            setChecked([...checked, e.target.value])
        } else {
            setChecked(checked.filter( item => item !== e.target.value))
        }
    }

    /*fetches the API data*/ 
    const formQuery = (string) => {
        let query = encodeURIComponent(string.replaceAll(" ", "+")); //encodeURIComponent - special characters in a query string are correctly encoded for using in an URL
        if (checked.length > 0)  {
            let parameters = checked.map((param) => `${param}`).join(''); //map function used to map over each element in the checked array and append an '&' character before the parameter to ensure a well formed query 
            console.log(parameters)
            return query + parameters;  //join function above to concatenate the above parameters into 1 string
        }
        return query;
    }

    /*fetches the API data*/ 
    const fetchData = async () => {
        const query = formQuery(text)
        console.log("Query: ", query)

        try {
            //number is currently 2 for testing purposes
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${query}&number=1`)
            const object = await data.json()
            console.log("Object: ", object);

            await Promise.all(object.results.map(async(obj, idx) => {
                const links = await fetch(`https://api.spoonacular.com/recipes/${obj.id}/information?apiKey=${KEY}&includeNutrition=false`)
                const resLinks = await links.json()
                console.log("resLinks: ", resLinks)
                //give obj any parametesr here. If user choses to save, these parameters will be saved
                obj.links = resLinks.spoonacularSourceUrl
                obj.summary = resLinks.summary
                obj.instructions = resLinks.instructions

                //required for saving function. uses idx index card to know which recipe to save.
                obj.idx = idx

                //makes a backend call to check if recipe is already saved. Checks if logged in. If not sets to false
                if (auth.currentUser){
                    const isRecipeSaved = savedRecipes.some((recipe) => recipe.recipeID === obj.id);
                    obj.isRecipeSaved = isRecipeSaved

                } else {
                    obj.isRecipeSaved = false
                }
                
                console.log("obj: ", obj);
                return obj
            }))
            
            console.log(object.results)
            setCards(object.results)
          } catch (error) {
            console.log(error)
          }
}


    return (

        <div className="container">

            <h1 className="webTitle">
                <b>Find your favorite recipes</b>
            </h1>


            {/*for the entire search bar row*/}



            <div className="containerForSearchBar">

                {/*search bar*/}
                <input 
                className="searchBar"
                style={{width: "70%", borderRadius: "15px", textAlign: "left", padding: "10px"}}
                placeholder="Search Here"
                onChange={(e) => setText(e.target.value)} />
                
                {/*submit button*/}
                <button className="submitButton" 
                onClick={fetchData}
                style={{borderRadius: "15px", border: "none"}}>
                Submit
                </button>

                {/*drop down menu*/}
                <Accordion className="customAccordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> Filter </Accordion.Header>
                        <Accordion.Body>
                            <table>
                            <tb>
                                <tr><input type="checkbox" value="&maxSugar=25" onChange={handleCheckBox}/> Sugar Free</tr>
                                <tr><input type="checkbox" value="&maxFat=25" onChange={handleCheckBox}/> Fat Free</tr>
                                <tr><input type="checkbox" value="&maxCarb=25" onChange={handleCheckBox}/> Low Carbs</tr>
                                <tr><input type="checkbox" value="&diet=vegetarian" onChange={handleCheckBox}/> Vegetarian</tr>
                                {/* <tr><input type="checkbox" value="&maxIngredients=25" onChange={handleCheckBox}/> Most Ingredients Used</tr> */}
                                {/* <tr><input type="checkbox" value="&hasAllergens=25" onChange={handleCheckBox}/> Has Common Allergens</tr> */}
                                {/* <tr><input type="checkbox" value="&leastCookTime=25" onChange={handleCheckBox}/> Least Cooking Time</tr> */}
                                {/* <tr><input type="checkbox" value="&leastPrepTime=25" onChange={handleCheckBox}/> Least Preparation Time</tr> */}
                                {/* <tr><input type="checkbox" value="&typeOfCuisine=25" onChange={handleCheckBox}/> Type of Cuisine</tr> */}
                            </tb>
                            </table>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </div>  



            {/*displays the cards*/}
            <div className="cardsContainer">
                    {cards.map((obj, key) => {
                        return (
                            <FoodCard id={obj.id} idx = {obj.idx} title = {obj.title} img = {obj.image} linkToPage = {obj.links} auth = {auth} saveRecipe={saveRecipe} isRecipeSaved={obj.isRecipeSaved} savedRecipes = {savedRecipes}  setSavedRecipes = {setSavedRecipes}></FoodCard>
                        )
                })}
            </div>
        </div>

    )
}
            // <SideBar savedRecipes={savedRecipes}/> 
            
export default Search


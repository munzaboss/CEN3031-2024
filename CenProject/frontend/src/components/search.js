import "../style/Search.css"
import {useState} from "react"
import FoodCard from "./FoodCard.js"
import Accordion from 'react-bootstrap/Accordion';



const Search = () => {

    
    const KEY = process.env.REACT_APP_API_KEY
    const [text, setText] = useState("")
    const [checked, setChecked] = useState([])
    const [cards, setCards] = useState([])

    
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
            let parameters = checked.map(() => '&${param}').join(''); //map function used to map over each element in the checked array and append an '&' character before the parameter to ensure a well formed query 
            return query + parameters;  //join function above to concatenate the above parameters into 1 string
        }
        return query;
    }

    /*fetches the API data*/ 
    const fetchData = async () => {
        const query = formQuery(text)
        console.log(query)
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${query}&number=10`)
            const object = await data.json()

            // const arr = []
            // object.results.forEach( (obj) => {
            //     arr.push(obj.image)
            // })

            setCards(object.results)
            console.log(object)
          } catch (error) {
            console.log(error)
          }
    }


    return (
        <div className="container">

            <h1 className="webTitle">
                Recipe Finder 
            </h1>
            
            <p>This is where the user will search up the food</p>

            {/*for the entire search bar row*/}
            <div className="containerForSearchBar">
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
                                <tr><input type="checkbox" value="&maxIngredients=25" onChange={handleCheckBox}/>Most Ingredients Used</tr>
                                <tr><input type="checkbox" value="&onlyVegetarian=25" onChange={handleCheckBox}/>Vegetarian</tr>
                                <tr><input type="checkbox" value="&hasAllergens=25" onChange={handleCheckBox}/>Has Common Allergens</tr>
                                <tr><input type="checkbox" value="&leastCookTime=25" onChange={handleCheckBox}/>Least Cooking Time</tr>
                                <tr><input type="checkbox" value="&leastPrepTime=25" onChange={handleCheckBox}/>Least Preparation Time</tr>
                                <tr><input type="checkbox" value="&typeOfCuisine=25" onChange={handleCheckBox}/>Type of Cuisine</tr>
                            </tb>
                            </table>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/*search bar*/}
                <input 
                className="searchBar"
                placeholder="Search Here"
                onChange={(e) => setText(e.target.value)}
                />

                {/*submit button*/}
                <button className="submitButton"onClick={fetchData}>submit</button>
            </div>

            {/*displays the cards*/}
            <div className="cardsContainer">
                    {cards.map((obj, key) => {
                        return (
                            <FoodCard key={key} img={obj.image} title={obj.title}></FoodCard>
                        )
                })}
            </div> 

        </div>
    )
}

export default Search

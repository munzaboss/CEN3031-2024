import 'bootstrap/dist/css/bootstrap.css'
import car1 from "../images/img-1.jpeg"
import car2 from "../images/img-2.jpeg"
import car3 from "../images/img-3.jpeg"
import car4 from "../images/img-4.jpeg"
import car5 from "../images/img-5.jpeg"

import {useState} from 'react'

const UserRecipeCard = (props) => {
    const [editable, setEditable] = useState(false)

    return(
        <div className={`recipe-child d-flex flex-row border border-black ${editable ? 'border border-danger' : null}`}>
                <div className="recipe-image w-25">
                    <img className="w-100 h-100 recipe-img" src={props.URL}></img>
                </div>

                <div className="recipe-info d-flex flex-column w-100">

                    {editable ? (
                        <div>
                            <div className="d-flex justify-content-center mt-0">
                                <h1>Title</h1>
                                <button onClick={() => setEditable(false)}className="btn btn-danger" style={{height: "50px", width: "100px", marginTop: "4px", transform: "translate(55vh)"}}>Confirm?</button>
                            </div>

                            <div className="d-flex flex-column align-items-start mt-5">
                                <p>Recipes: <input value="Recipe Info 1"></input></p>
                                <p>Recipes: <input value="Recipe Info 2"></input></p>
                                <p>Recipes: <input value="Recipe Info 3"></input></p>
                                <p>Recipes: <input value="Recipe Info 4"></input></p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="d-flex justify-content-center mt-0">
                                <h1>Title</h1>
                                <button onClick={() => setEditable(true)}className="btn btn-primary" style={{height: "50px", width: "100px", marginTop: "4px", transform: "translate(55vh)"}}>Edit</button>
                            </div>

                            <div className="d-flex flex-column align-items-start mt-5">
                                <p className="">Recipes: Some text here</p>
                                <p className="">Recipes: Some text here</p>
                                <p className="">Recipes: Some text here</p>
                                <p className="">Recipes: Some text here</p>
                            </div>
                        </div>                       
                    )}
                </div>
            </div>
    )
}

export default UserRecipeCard
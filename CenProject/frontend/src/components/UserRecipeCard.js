import 'bootstrap/dist/css/bootstrap.css'
import "../style/UserRecipeCard.css"
import car1 from "../images/img-1.jpeg"
import car2 from "../images/img-2.jpeg"
import car3 from "../images/img-3.jpeg"
import car4 from "../images/img-4.jpeg"
import car5 from "../images/img-5.jpeg"
import axios from 'axios'

import {useState} from 'react'

const UserRecipeCard = (props) => {
    const [editable, setEditable] = useState(false)
    const [instructions, setInstructions] = useState(props.instructions)
    const [summary, setSummary] = useState(props.summary)
    const [title, setTitle] = useState(props.title)

    const handleDeleteClick = () => {
        props.onDelete(props.recipeID);
    }
    
    const handleConfirm = async () => {
        setEditable(false)
        const newRecipe = {
            userID: props.USER.uid,
            recipeID: props.recipeID, //6 digits 
            recipeTitle: title, 
            recipeImage: props.url, 
            recipeLink: props.URL,
            summary: summary, 
            instructions: instructions
        }

        await axios.post(`http://localhost:8000/deleteRecipe`, { recipeID: props.recipeID, userID: props.USER.uid });
        await axios.post(`http://localhost:8000/saveRecipeTest`, newRecipe)
    }

    return(
        <div className={`recipe-child d-flex flex-row border border-black ${editable ? 'border border-danger' : null}`}>
                <div className="recipe-image w-50">
                    <a href={props.recipeLink} target="_blank">
                        <img className="w-100 h-100 recipe-img" src={props.url} alt={car1}></img>
                    </a>
                </div>

                <div className="recipe-info d-flex flex-column w-100">

                    {editable ? (
                        <div>
                        <div className="d-flex justify-content-center mt-0">
                            <div className="overflow-hidden d-flex flex-row" style={{width: "100%", height: "50px"}}>
                                <div className="overflow-hidden custom-fade" style={{minWidth: "80%", height: "60px", marginLeft: "8px"}}> 
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} style={{width: "500px"}}></input>
                                </div>
                                <div className="d-flex justify-content-center" style={{width: "100%"}}> 
                                    <button onClick={handleConfirm} className="btn btn-danger" style={{height: "45px", width: "100px", marginTop: "4px"}}>Confirm?</button>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-start mt-5 gap-3">
                            <div style={{maxHeight: "250px", minHeight: "250px", marginLeft: "8px", paddingRight: "5px", overflow: "scroll"}}>
                                <h4>Instructions</h4>
                                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} style={{width: "900px", maxHeight: "250px", minHeight: "250px", marginLeft: "8px", paddingRight: "5px", overflow: "scroll"}}></textarea>
                            </div>
                            <div style={{maxHeight: "250px", marginLeft: "8px", paddingRight: "5px", overflow: "scroll"}}>
                                <h4>Summary</h4>
                                <textarea value={summary} onChange={(e) => setSummary(e.target.value)} style={{width: "900px", maxHeight: "250px", minHeight: "250px", marginLeft: "8px", paddingRight: "5px", overflow: "scroll"}}></textarea>
                            </div>
                        </div>
                    </div>   
                    ) : (
                        <div>
                            <div className="d-flex justify-content-center mt-0">
                                <div className="overflow-hidden d-flex flex-row" style={{width: "100%", height: "50px"}}>
                                    <div className="overflow-hidden custom-fade" style={{minWidth: "80%", height: "60px", marginLeft: "8px"}}> 
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="d-flex justify-content-center" style={{width: "100%"}}> 
                                        <button onClick={() => setEditable(true)}className="btn btn-success" style={{height: "45px", width: "100px", marginTop: "4px"}}>Edit</button>
                                    </div>
                                    <div className="d-flex justify-content-center" style={{width: "100%",}}> 
                                        <button onClick={handleDeleteClick}className="btn btn-danger" style={{height: "45px", width: "100px", marginTop: "4px"}}>Delete</button>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-start mt-5 gap-3">
                                <div style={{maxHeight: "250px", minHeight: "250px", marginLeft: "8px", paddingRight: "5px", overflow: "scroll"}}>
                                    <h4>Instructions</h4>
                                    <p className="">{instructions}</p>
                                </div>
                                <div style={{maxHeight: "250px", marginLeft: "8px", paddingRight: "5px", overflow: "scroll"}}>
                                    <h4>Summary</h4>
                                    <p className="">{summary}</p>
                                </div>
                            </div>
                        </div>                       
                    )}
                </div>

            </div>
    )
}

export default UserRecipeCard
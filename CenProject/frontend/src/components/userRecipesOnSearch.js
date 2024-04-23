import "../style/userRecipesOnSearch.css"
import deleteButton from '../images/delete_button.png'
const UserRecipeOnSearch = (props) => {
    const handleClick = () => {
        // opens in new tab
        window.open(props.recipeLink, '_blank');
        console.log(`props recipe: ${props.recipeID}`)
    };

    const handleDeleteClick = () => {
        props.onDelete(props.recipeID);
    }

    return (
        <div className="card-container">
                <img className="card-img" src={props.recipeImage} onClick={handleClick}></img>

                <div className="card-text-container">
                    <div className="card-text">
                        <p>{props.recipeTitle}</p>
                    </div>
                    
                </div>
                <button className= "delete-button" onClick={handleDeleteClick}>
                    <img src={deleteButton} className = 'delete-icon' />
                </button>
                
        </div>
    )
}

export default UserRecipeOnSearch
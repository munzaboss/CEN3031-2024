import "../style/userRecipesOnSearch.css"

const UserRecipeOnSearch = (props) => {
    const handleClick = () => {
        // opens in new tab
        window.open(props.recipeLink, '_blank');
    };

    return (
        <div className="card-container" onClick={handleClick}>
                <img className="card-img" style={{borderRadius: "20px", minWidth: "55%"}} src={props.recipeImage}></img>

                <div className="card-text-container">
                    <div className="card-text">
                        <p>{props.recipeTitle}</p>
                    </div>

                </div>
        </div>
    )
}

export default UserRecipeOnSearch
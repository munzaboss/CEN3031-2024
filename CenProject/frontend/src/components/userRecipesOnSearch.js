import "../style/userRecipesOnSearch.css"

const UserRecipeOnSearch = (props) => {
    return (
        <div className="card-container">
                <img className="card-img" style={{borderRadius: "20px", minWidth: "55%"}} src={props.URL}></img>

                <div className="card-text-container">
                    <div className="card-text">
                        <p>long title is loingfdsafdsfsa</p>
                        <p>By Ishan</p>
                    </div>

                </div>
        </div>
    )
}

export default UserRecipeOnSearch
import "../style/userRecipesOnSearch.css"

const UserRecipeOnSearch = (props) => {
    return (
        <div className="card-container">
            <img className="card-img" src={props.URL}></img>

            <div className="card-title">
                <h4>Title</h4>
            </div>
        </div>
    )
}

export default UserRecipeOnSearch
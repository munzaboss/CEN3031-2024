import express from 'express'
import cors from 'cors'
import { DBcreateUser, DBsaveRecipe, DBcheckUser, DBisRecipeSaved, DBgetSavedRecipes } from './src/database.js'


const app = express()
app.use(express.json())
app.use(cors())



app.post('/createUser', (req, res) => {
    const { userID, name, email, image } = req.body
    DBcreateUser(userID, name, email, image);
    res.send('Data updated');
});

app.get('/checkUser', async (req,res) => {
    const { userID } = req.query;
    const result = await DBcheckUser(userID);
    console.log(result);
    res.send(result);
    
})


app.post('/saveRecipeTest', (req, res) => {
    const { userID, recipeID, recipeTitle, recipeImage, recipeLink, summary, instructions } = req.body
    DBsaveRecipe(userID, recipeID, recipeTitle, recipeImage, recipeLink, summary, instructions);
    res.send('Recipe Saved');
});

app.get('/isRecipeSaved', async (req, res) => {
    const { userID, recipeID } = req.query;
    const result = await DBisRecipeSaved(userID, recipeID);
    console.log("UserID: ", userID)
    console.log("recipeID: ", recipeID)
    console.log(result);
    res.send(result);
})

app.get('/getSavedRecipes', async (req, res) => {
    const { userID } = req.query;
    const recipesArray = await DBgetSavedRecipes(userID);
    console.log("recipes array: ", recipesArray)
    res.send({recipes: recipesArray});
})
// app.post('/saveTestRecipe', (req, res) => {
    

// });


app.listen(8000, () => console.log("app is running"))
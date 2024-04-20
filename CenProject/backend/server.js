import express from 'express'
import cors from 'cors'
import { DBcreateUser, DBsaveRecipe } from './src/database.js'


const app = express()
app.use(express.json())
app.use(cors())



app.post('/createUser', (req, res) => {
    const { userID, name, email, image } = req.body
    DBcreateUser(userID, name, email, image);
    res.send('Data updated');
});


app.post('/test', (req, res) => {
    res.send('bruh');
});

app.post('/saveRecipeTest', (req, res) => {
    const { userID, recipeID, recipeTitle, recipeImage, recipeLink, summary, instructions } = req.body
    DBsaveRecipe(userID, recipeID, recipeTitle, recipeImage, recipeLink, summary, instructions);
    res.send('Recipe Saved');
});

// app.post('/saveTestRecipe', (req, res) => {
    

// });


app.listen(8000, () => console.log("app is running"))
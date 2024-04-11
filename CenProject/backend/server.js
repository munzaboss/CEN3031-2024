import express from 'express'
import cors from 'cors'
import { createUser } from './src/database.js'


const app = express()
app.use(express.json())
app.use(cors())



app.post('/createUser', (req, res) => {
    const { userID, name, email, image } = req.body
    createUser(userID, name, email, image);
    res.send('Data updated');
});


app.listen(8000, () => console.log("app is running"))
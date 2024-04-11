import express from 'express'
import cors from 'cors'

import { writeUserData } from './firebaseConfig.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne, userTwo, userThree"]})
})


app.post('/createUser', (req, res) => {
    const { userID, name, email } = req.body
    writeUserData(userID, name, email);
    res.send('Data updated');
});

app.get('/getRec',(req, res) => {
    
})

app.listen(8000, () => console.log("app is running"))
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne, userTwo, userThree"]})
})

app.listen(8000, () => console.log("app is running"))
const express = require('express');
const port = 3000
const bodyParser = require('body-parser')

let results = []

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/restults', (req, res) => {
    console.log("Posting results")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
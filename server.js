const express = require('express');
const port = 3000
const bodyParser = require('body-parser')

const db = require('./models/index.js');

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/result', (req, res) => {
    console.log("Posting results", res.body);
})

app.get('/results', async (req, res) => {
    let surveys = await db.survey.findAll();
    console.log(surveys);
    res.send(surveys);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
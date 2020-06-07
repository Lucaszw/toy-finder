const express = require('express');
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser')

const db = require('./models/index.js');

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/results', async (req, res) => {
    const {results} = req.body;
    await db.survey.create({results});
    res.send({status: 'ok'});
});

app.get('/results', async (req, res) => {
    let surveys = await db.survey.findAll();
    res.send(surveys);
});

app.get('/trends', async (req, res) => {
    let [popularity] = await db.sequelize.query(`
        with categories as (
            select
                unnest(results) as category
            from surveys
        )
        select
            category,
            count(category) as popularity
        from categories
        group by category
    `);
    res.send(popularity);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
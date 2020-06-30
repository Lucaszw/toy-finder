const express = require('express');
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser')

const db = require('./models/index.js');

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/result/:templateId', async (req, res) => {
    const {results} = req.body;
    const templateId = req.params.templateId;

    await db.survey.create({results, template_id: templateId});
    res.send({status: 'ok'});
});

app.get('/results', async (req, res) => {
    let surveys = await db.survey.findAll();
    res.send(surveys);
});

app.get('/trends/:surveyName', async (req, res) => {
    let surveyName = req.params.surveyName;
    let optionalQuery = '';
    if (surveyName && surveyName != 'null')
        optionalQuery = `
            inner join survey_templates st on st.id = template_id
            where st.name = '${surveyName}'
        `;
    let [popularity] = await db.sequelize.query(`
        with categories as (
            select
                unnest(results) as category
            from surveys
            ${optionalQuery}
        )
        select
            category,
            count(category) as popularity
        from categories
        group by category
    `);
    res.send(popularity);
});

app.post("/survey", async (req, res) => {
    const {surveyName, surveyCategories} = req.body;
    await db.survey_template.create({name: surveyName, categories: surveyCategories});
    res.send({status: 'ok'});
});

app.get("/surveys", async (req, res) => {
    let surveys = await db.survey_template.findAll({include: [db.survey]});
    res.send(surveys);
});


app.get("/survey/:name", async (req, res) => {
    let surveyTemplate = await db.survey_template.findOne({where: {name: req.params.name}});
    console.log({surveyTemplate});
    res.send(surveyTemplate);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
window.API = {};

API.postResults = async (results, templateId) => {
    console.log({results}, JSON.stringify({results}));
    const url = `/result/${templateId}`;
    const options = {
        method: 'POST',
        body: JSON.stringify({results}),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // send POST request
    return await fetch(url, options).then(res => res.json())
}

API.getTrends = async (surveyName) => {
    const url = `/trends/${surveyName}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return await fetch(url, options).then(res => res.json())
};

API.postSurvey = async (surveyName, surveyCategories) => {
    const url = '/survey';
    const options = {
        method: 'POST',
        body: JSON.stringify({surveyName, surveyCategories}),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await fetch(url, options).then(res => res.json())
};

API.getSurvey = async (surveyName) => {
    const url = `/survey/${surveyName}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await fetch(url, options).then(res => res.json());
};
API.getSurveys = async () => {
    const url = '/surveys';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await fetch(url, options).then(res => res.json());
};


window.API = {};

API.postResults = async (results) => {
    console.log({results}, JSON.stringify({results}));
    const url = '/results';
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

API.getTrends = async () => {
    const url = '/trends';
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
    return await fetch(url, options);
}


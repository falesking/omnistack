const { Router } = require ('express');
const axios = require('axios');
const Dev = require('./models/Dev')


const routes = Router();

app.post('/devs', (request, response) => {
    const {github_username  } = request.body;

    const response = await axios.get(`https:api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio} = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray

    })

    

    return response.json(dev);
});

    module.exports = routes;
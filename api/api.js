const axios = require('axios').default;

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

module.exports = api;
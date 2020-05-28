'use strict';

const Api = require('claudia-api-builder');
const api = new Api();
const { name, version, description } = require('./package.json');

// Handlers
const createPlayer = require('./handlers/create-player');

// Config
const defaultConfig = { success: 200, error: 400 };
const defaultConfigWithAPIKey = Object.assign({}, defaultConfig, { apiKeyRequired: true });

// Routes
api.get('/', () => 'Welcome to Tic Tac Toe API');
api.get('/version', () => ({ name, version, description }), defaultConfigWithAPIKey);

api.post('/player', request => createPlayer(request), defaultConfigWithAPIKey);

module.exports = api;

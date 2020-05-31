'use strict';

const Api = require('claudia-api-builder');
const api = new Api();
const { name, version, description } = require('./package.json');

// Handlers
const createPlayer = require('./handlers/create-player');
const createSession = require('./handlers/create-session');
const updateSession = require('./handlers/update-session');
const getSessions = require('./handlers/get-sessions');

// Config
const defaultConfig = { success: 200, error: 400 };
const defaultConfigWithAPIKey = Object.assign({}, defaultConfig, { apiKeyRequired: true });

// Routes
api.get('/', () => 'Welcome to Tic Tac Toe API');
api.get('/version', () => ({ name, version, description }), defaultConfigWithAPIKey);

api.post('/player', request => createPlayer(request), defaultConfigWithAPIKey);
api.post('/session', request => createSession(request), defaultConfigWithAPIKey);
api.put('/session', request => updateSession(request), defaultConfigWithAPIKey);
api.get('/sessions', request => getSessions(request), defaultConfigWithAPIKey);

module.exports = api;

'use strict';

const Session = require('../models/Session');
const { validateRequest } = require('./util');
const { PENDING, WAITING_FOR } = require('../data/constants');

const createSession = async request => {
    const { player_x: Player_X, player_o: Player_O, error } = await validateRequest(request, undefined, [{ name: 'player_x', type: 'string' }, { name: 'player_o', type: 'string' }]);
    if (error) {
        return Promise.reject(error);
    }

    const new_session = {
        Player_X,
        Player_O,
        Status: WAITING_FOR(Player_X === PENDING ? 'X' : 'O')
    };

    return new Promise((resolve, reject) => {
        Session.create(new_session, (err, session) => {
            if (err) {
                reject(err);
            }

            if (session) {
                resolve(session);
            } else {
                reject('Could not create session');
            }
        });
    });
};

module.exports = createSession;

'use strict';

const Session = require('../models/Session');
const { validateRequest } = require('./util');
const { AWAIT_JOIN } = require('../data/constants');

const createSession = async request => {
    const { player_x: Player_X, error } = await validateRequest(request, undefined, [{ name: 'player_x', type: 'object' }]);
    if (error) {
        return Promise.reject(error);
    }

    const new_session = {
        Player_X,
        Status: AWAIT_JOIN
    };

    return new Promise((resolve, reject) => {
        Session.create(new_session, (err, session) => {
            if (err) {
                reject(err);
            }

            if (session) {
                resolve(session.attrs);
            } else {
                reject('Could not create session');
            }
        });
    });
};

module.exports = createSession;

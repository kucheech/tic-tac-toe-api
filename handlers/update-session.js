'use strict';

const Session = require('../models/Session');
const { validateRequest } = require('./util');
const { AWAIT_JOIN } = require('../data/constants');

const updateSession = async request => {
    const { id: Id, status: Status, error } = await validateRequest(request, undefined, [{ name: 'id', type: 'string' }, { name: 'status', type: 'string' }]);
    if (error) {
        return Promise.reject(error);
    }

    const update = {
        Id,
        Status
    };

    return new Promise((resolve, reject) => {
        Session.update(update, (err, session) => {
            if (err) {
                reject(err);
            }

            if (session) {
                resolve(session.attrs);
            } else {
                reject('Could not update session');
            }
        });
    });
};

module.exports = updateSession;

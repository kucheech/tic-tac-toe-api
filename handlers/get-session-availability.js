'use strict';

const Session = require('../models/Session');
const { validateRequest } = require('./util');
const { AWAIT_JOIN } = require('../data/constants');

const getSessionAvailability = async request => {
    const { id: Id, error } = await validateRequest(request, [{ name: 'id', type: 'string' }]);
    if (error) {
        return Promise.reject(error);
    }

    return new Promise((resolve, reject) => {
        Session.get(Id, (err, session) => {
            if (err) {
                reject(err);
            }

            if (session) {
                resolve(session.attrs.Status === AWAIT_JOIN);
            } else {
                resolve(false);
            }
        });
    });
};

module.exports = getSessionAvailability;

'use strict';

const Session = require('../models/Session');
const { validateRequest } = require('./util');

const getSessions = async request => {
    const { type, error } = await validateRequest(request, [{ name: 'type', type: 'string' }]);
    if (error) {
        return Promise.reject(error);
    }
    return new Promise((resolve, reject) => {
        Session
            .scan()
            .where('Status').equals(type)
            .limit(5)
            .loadAll()
            .exec((err, res) => {
                if (err) {
                    reject(err);
                }

                if (res.Count) {
                    resolve(res.Items.map(i => i.attrs));
                } else {
                    resolve([]);
                }
            });
    });
};

module.exports = getSessions;

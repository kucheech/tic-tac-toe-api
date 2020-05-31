'use strict';

const Player = require('../models/Player');
const { validateRequest } = require('./util');

const createPlayer = async request => {
    const { name: Name, error } = await validateRequest(request, undefined, [{ name: 'name', type: 'string' }]);
    if (error) {
        return Promise.reject(error);
    }

    return new Promise((resolve, reject) => {
        Player.create({ Name, Win: 0, Lose: 0, Draw: 0 }, (err, player) => {
            if (err) {
                reject(err);
            }

            if (player) {
                resolve(player);
            } else {
                reject('Could not add player');
            }
        });
    });
};

module.exports = createPlayer;

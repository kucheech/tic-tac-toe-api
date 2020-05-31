
'use strict';

const dynamo = require('dynamodb');
const Joi = require('joi');

dynamo.AWS.config.update({ region: 'ap-southeast-1' });
const tableName = 'Player';

const Player = dynamo.define(tableName, {
    hashKey: 'Id',
    rangeKey: 'Name',

    schema: {
        Id: dynamo.types.uuid(),
        Name: Joi.string(),
        Win: Joi.number(),
        Lose: Joi.number(),
        Draw: Joi.number()
    },

    tableName
});

module.exports = Player;

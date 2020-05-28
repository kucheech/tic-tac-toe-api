
'use strict';

const dynamo = require('dynamodb');
const Joi = require('joi');

dynamo.AWS.config.update({ region: 'ap-southeast-1' });
const tableName = 'Move';

const Move = dynamo.define(tableName, {
    hashKey: 'Id',
    rangeKey: 'SessionId',

    timestamp: true,

    schema: {
        Id: dynamo.types.uuid(),
        SessionId: Joi.string(),
        Player: Joi.string(),
        Position: Joi.number()
    },

    tableName
});

module.exports = Move;

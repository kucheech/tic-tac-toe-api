
'use strict';

const dynamo = require('dynamodb');
const Joi = require('joi');

dynamo.AWS.config.update({ region: 'ap-southeast-1' });
const tableName = 'Session';

const Session = dynamo.define(tableName, {
    hashKey: 'Id',
    rangeKey: 'Status',

    timestamps: true,

    schema: {
        Id: dynamo.types.uuid(),
        Player_X: Joi.string(),
        Player_O: Joi.string(),
        Status: Joi.string()
    },

    tableName
});

module.exports = Session;

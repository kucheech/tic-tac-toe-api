
'use strict';

const dynamo = require('dynamodb');
const Joi = require('joi');

dynamo.AWS.config.update({ region: 'ap-southeast-1' });
const tableName = 'Session';

const Session = dynamo.define(tableName, {
    hashKey: 'Id',

    timestamps: true,

    schema: {
        Id: dynamo.types.uuid(),
        Player_X: Joi.object(),
        Player_O: Joi.object(),
        Status: Joi.string()
    },

    tableName
});

module.exports = Session;

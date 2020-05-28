'use strict';

const JASMINE_TIMEOUT = 100000;
const PENDING = '<PENDING>';
const PLAYER = v => `Player ${v}`;
const PLAYER_X = PLAYER('X');
const PLAYER_O = PLAYER('O');
const WAITING_FOR = p => `Waiting for ${PLAYER(p)}`;

module.exports = {
    JASMINE_TIMEOUT,
    PENDING,
    WAITING_FOR
};
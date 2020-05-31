'use strict';

const JASMINE_TIMEOUT = 100000;
const PENDING = '<PENDING>';
const PLAYER = v => `Player ${v}`;
const PLAYER_X = PLAYER('X');
const PLAYER_O = PLAYER('O');
const WAITING_FOR = p => `Waiting for ${PLAYER(p)}`;
const AWAIT_JOIN = 'AWAIT_JOIN';
const IN_PROGRESS = 'IN_PROGRESS';
const COMPLETED = 'COMPLETED';
const GAME_OVER = 'GAME_OVER';

module.exports = {
    JASMINE_TIMEOUT,
    PENDING,
    AWAIT_JOIN,
    IN_PROGRESS,
    GAME_OVER
};
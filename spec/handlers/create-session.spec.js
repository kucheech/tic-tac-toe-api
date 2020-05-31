'use strict';

const underTest = require('../../handlers/create-session');
const { MISSING_PARAMETER, MISSING_OR_INVALID_VALUE, NULL_REQUEST } = require('../../data/errorMessages');
const { PENDING } = require('../../data/constants');

describe('Create session', () => {
  it(`should reject with a ${NULL_REQUEST} error for null request`, async () => {
    await expectAsync(underTest()).toBeRejectedWith(NULL_REQUEST);
  });

  const missing_params = MISSING_PARAMETER('player_x');
  it(`should reject with a ${missing_params} error for missing params`, async () => {
    await expectAsync(underTest({ body: {} })).toBeRejectedWith(missing_params);
  });

  const missing_or_invalid_player_x = MISSING_OR_INVALID_VALUE('player_x');
  it(`should reject with a ${missing_or_invalid_player_x} error for missing player_x`, async () => {
    await expectAsync(underTest({ body: { player_x: 123 } })).toBeRejectedWith(missing_or_invalid_player_x);
    await expectAsync(underTest({ body: { player_x: true } })).toBeRejectedWith(missing_or_invalid_player_x);
    // await expectAsync(underTest({ body: { player_x: [] } })).toBeRejectedWith(missing_or_invalid_player_x);
    await expectAsync(underTest({ body: { player_x: '' } })).toBeRejectedWith(missing_or_invalid_player_x);
    await expectAsync(underTest({ body: { player_x: 'test-player-1' } })).toBeRejectedWith(missing_or_invalid_player_x);
  });

  it('should resolve for valid request', async () => {
    await expectAsync(underTest({ body: { player_x: { id: 'test-player-1' } } })).toBeResolved();
  });
});

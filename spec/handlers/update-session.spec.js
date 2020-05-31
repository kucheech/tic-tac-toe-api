'use strict';

const underTest = require('../../handlers/update-session');
const { MISSING_PARAMETER, MISSING_OR_INVALID_VALUE, NULL_REQUEST } = require('../../data/errorMessages');
const { IN_PROGRESS } = require('../../data/constants');

describe('Update session', () => {
  it(`should reject with a ${NULL_REQUEST} error for null request`, async () => {
    await expectAsync(underTest()).toBeRejectedWith(NULL_REQUEST);
  });

  const missing_params = MISSING_PARAMETER('id, status');
  it(`should reject with a ${missing_params} error for missing params`, async () => {
    await expectAsync(underTest({ body: {} })).toBeRejectedWith(missing_params);
  });

  const missing_or_invalid_id = MISSING_OR_INVALID_VALUE('id');
  it(`should reject with a ${missing_or_invalid_id} error for missing id`, async () => {
    await expectAsync(underTest({ body: { id: 123 } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ body: { id: true } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ body: { id: [] } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ body: { id: '' } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ body: { Id: 'test-player-1' } })).toBeRejectedWith(missing_or_invalid_id);
  });

  const missing_or_invalid_status = MISSING_OR_INVALID_VALUE('status');
  it(`should reject with a ${missing_or_invalid_status} error for missing status`, async () => {
    await expectAsync(underTest({ body: { id: '123', status: 123 } })).toBeRejectedWith(missing_or_invalid_status);
    await expectAsync(underTest({ body: { id: '123', status: true } })).toBeRejectedWith(missing_or_invalid_status);
    await expectAsync(underTest({ body: { id: '123', status: [] } })).toBeRejectedWith(missing_or_invalid_status);
    await expectAsync(underTest({ body: { id: '123', status: '' } })).toBeRejectedWith(missing_or_invalid_status);
    await expectAsync(underTest({ body: { id: '123', Status: 'test-player-1' } })).toBeRejectedWith(missing_or_invalid_status);
  });

  it('should resolve for valid request', async () => {
    await expectAsync(underTest({ body: { id: 'test-dummy-id', status: IN_PROGRESS } })).toBeResolved();
  });
});

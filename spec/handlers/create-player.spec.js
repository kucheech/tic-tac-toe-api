'use strict';

const underTest = require('../../handlers/create-player');
const { MISSING_PARAMETER, MISSING_OR_INVALID_VALUE, NULL_REQUEST } = require('../../data/errorMessages');

describe('Create player', () => {
  it(`should reject with a ${NULL_REQUEST} error for null request`, async () => {
    await expectAsync(underTest()).toBeRejectedWith(NULL_REQUEST);
  });

  const missing_name = MISSING_PARAMETER('name');
  it(`should reject with a ${missing_name} error for null request`, async () => {
    await expectAsync(underTest({ body: {} })).toBeRejectedWith(missing_name);
  });

  const missing_or_invalid_name = MISSING_OR_INVALID_VALUE('name');
  it(`should reject with a ${missing_or_invalid_name} error for null request`, async () => {
    await expectAsync(underTest({ body: { name: 123 } })).toBeRejectedWith(missing_or_invalid_name);
    await expectAsync(underTest({ body: { name: true } })).toBeRejectedWith(missing_or_invalid_name);
    await expectAsync(underTest({ body: { name: {} } })).toBeRejectedWith(missing_or_invalid_name);
    await expectAsync(underTest({ body: { name: [] } })).toBeRejectedWith(missing_or_invalid_name);
    await expectAsync(underTest({ body: { name: '' } })).toBeRejectedWith(missing_or_invalid_name);
  });

  it('should resolve for valid request', async () => {
    await expectAsync(underTest({ body: { name: 'Test Player' } })).toBeResolved();
  });
});

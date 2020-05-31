'use strict';

const underTest = require('../../handlers/get-sessions');
const { MISSING_PARAMETER, MISSING_OR_INVALID_VALUE, NULL_REQUEST } = require('../../data/errorMessages');
const { AWAIT_JOIN } = require('../../data/constants');

describe('Get sessions', () => {
  it(`should reject with a ${NULL_REQUEST} error for null request`, async () => {
    await expectAsync(underTest()).toBeRejectedWith(NULL_REQUEST);
  });

  const missing_or_invalid_type = MISSING_OR_INVALID_VALUE('type');
  it(`should reject with a ${missing_or_invalid_type} error for missing type`, async () => {
    await expectAsync(underTest({ queryString: {} })).toBeRejectedWith(missing_or_invalid_type);
    await expectAsync(underTest({ queryString: { type: 123 } })).toBeRejectedWith(missing_or_invalid_type);
    await expectAsync(underTest({ queryString: { type: true } })).toBeRejectedWith(missing_or_invalid_type);
    await expectAsync(underTest({ queryString: { type: [] } })).toBeRejectedWith(missing_or_invalid_type);
    await expectAsync(underTest({ queryString: { type: '' } })).toBeRejectedWith(missing_or_invalid_type);
  });

  it('should resolve for valid request', async () => {
    await expectAsync(underTest({ queryString: { type: AWAIT_JOIN } })).toBeResolved();
  });
});

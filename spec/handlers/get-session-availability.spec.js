'use strict';

const underTest = require('../../handlers/get-session-availability');
const { MISSING_PARAMETER, MISSING_OR_INVALID_VALUE, NULL_REQUEST } = require('../../data/errorMessages');
const { AWAIT_JOIN } = require('../../data/constants');

describe('Get session availability', () => {
  it(`should reject with a ${NULL_REQUEST} error for null request`, async () => {
    await expectAsync(underTest()).toBeRejectedWith(NULL_REQUEST);
  });

  const missing_or_invalid_id = MISSING_OR_INVALID_VALUE('id');
  it(`should reject with a ${missing_or_invalid_id} error for missing type`, async () => {
    await expectAsync(underTest({ queryString: {} })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ queryString: { id: 123 } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ queryString: { id: true } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ queryString: { id: [] } })).toBeRejectedWith(missing_or_invalid_id);
    await expectAsync(underTest({ queryString: { id: '' } })).toBeRejectedWith(missing_or_invalid_id);
  });

  it('should resolve for valid request', async () => {
    await expectAsync(underTest({ queryString: { id: 'test-dummy-id' } })).toBeResolvedTo(false);
  });
});

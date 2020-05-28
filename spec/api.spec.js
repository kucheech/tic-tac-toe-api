'use strict';

const underTest = require('../api');

describe('API', () => {
  [
    {
      path: '',
      requestTypes: ['GET']
    },
    {
      path: 'version',
      requestTypes: ['GET']
    },
    {
      path: 'player',
      requestTypes: ['POST']
    }
  ].forEach(route => {
    it(`should setup /${route.path} route`, () => {
      expect(Object.keys(underTest.apiConfig().routes[route.path])).toEqual(route.requestTypes);
    })
  })
});

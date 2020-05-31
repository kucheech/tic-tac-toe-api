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
    },
    {
      path: 'session',
      requestTypes: ['POST']
    },
    {
      path: 'sessions',
      requestTypes: ['GET']
    }
  ].forEach(route => {
    it(`should setup /${route.path} route`, () => {
      expect(Object.keys(underTest.apiConfig().routes[route.path])).toEqual(route.requestTypes);
    })
  })
});

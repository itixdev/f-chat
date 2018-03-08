const assert = require('assert');
const app = require('../../src/app');

describe('\'mongomessages\' service', () => {
  it('registered the service', () => {
    const service = app.service('mongomessages');

    assert.ok(service, 'Registered the service');
  });
});

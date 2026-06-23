const test = require('node:test');
const assert = require('node:assert');
const server = require('./server');

test('Server has expected properties', () => {
  assert.ok(server !== null, 'Server object should exist');
  assert.strictEqual(typeof server.listen, 'function', 'Server should have a listen method');
});

test('Dummy test to verify CI workflow', () => {
  assert.strictEqual(1 + 1, 2, 'Math should work');
});

const { TestWatcher } = require('jest');
const potion = require('../lib/Potion.js');

new TestWatcher('creates a health potion object', () => {
  const potion = new Potion('health');

  expect(potion.name).toBe('health');
  expect(potion.value).toEqual(expect.any(Number));
});
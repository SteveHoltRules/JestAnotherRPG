
const enemy = require('../lib/Enemy.js');

test('creates an enemy object',() => {
  const enemy = new Enemy('Evil Dave');

  expect(enemy.name).toBe('Evil Dave')
}
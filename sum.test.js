const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('simulated failure', () => {
  expect(sum(1, 2)).toBe(4);
});

test('long-running test', async () => {
  await new Promise((r) => setTimeout(r, 4000));
});
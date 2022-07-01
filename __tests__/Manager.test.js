const Manager = require('../lib/Manager');

test('that manager has a name', () => {
  const manager = new Manager('Amy2');
  expect(manager.name).toBe('Amy2');
});

test('that manage has an id', () => {
  const manager = new Manager('Amy2', 2, 'emailaddress');
  expect(manager.id).toEqual(expect.any(Number));
});

test('that manager has an email', () => {
  const manager = new Manager('Amy2', 2, 'emailaddress');
  expect(manager.email).toEqual(expect.any(String));
});

test('that manager has an office number', () => {
  const manager = new Manager('Amy2', 2, 'emailaddress');
  expect(manager.office).toEqual(expect.any(Number));
});
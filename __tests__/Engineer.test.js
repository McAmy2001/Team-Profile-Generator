const Engineer = require('../lib/Engineer');

test('that engineer has a name', () => {
  const engineer = new Engineer('Amy3', 3, 'emailaddress');
  expect(engineer.name).toBe('Amy3');
});

test('that engineer has an id', () => {
  const engineer = new Engineer('Amy3', 3, 'emailaddress');
  expect(engineer.id).toEqual(expect.any(Number));
});

test('that engineer has an email', () => {
  const engineer = new Engineer('Amy3', 3, 'emailaddress');
  expect(engineer.email).toEqual(expect.any(String));
});
const Intern = require('../lib/Intern');

test('that intern has a name', () => {
  const intern = new Intern('Amy4', 4, 'emailaddress');
  expect(intern.name).toBe('Amy4');
});

test('that intern has an id', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress');
  expect(intern.id).toEqual(expect.any(Number));
});

test('that intern has an email', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress');
  expect(intern.email).toEqual(expect.any(String));
});
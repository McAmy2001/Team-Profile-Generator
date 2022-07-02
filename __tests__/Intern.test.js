const Intern = require('../lib/Intern');

test('that intern has a name', () => {
  const intern = new Intern('Amy4', 4, 'emailaddress', 'School');
  expect(intern.name).toBe('Amy4');
});

test('that intern has an id', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress', 'School');
  expect(intern.id).toEqual(expect.any(Number));
});

test('that intern has an email', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress', 'School');
  expect(intern.email).toEqual(expect.any(String));
});

test('that intern has a school listed', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress', 'School');
  expect(intern.school).toEqual(expect.any(String));
});

test('that getSchool() returns a school', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress', 'School');
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test('that getRole() returns the correct role', () => {
  const intern = new Intern('Amy3', 3, 'emailaddress', 'School');
  expect(intern.getRole()).toBe('Intern')
});
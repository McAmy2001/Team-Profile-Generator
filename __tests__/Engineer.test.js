const Engineer = require('../lib/Engineer');

test('that engineer has a name', () => {
  const engineer = new Engineer('Amy3', 3, 'mcca0168@umn.edu', 'McAmy2001');
  expect(engineer.name).toBe('Amy3');
});

test('that engineer has an id', () => {
  const engineer = new Engineer('Amy3', 3, 'mcca0168@umn.edu', 'McAmy2001');
  expect(engineer.id).toEqual(expect.any(Number));
});

test('that engineer has an email', () => {
  const engineer = new Engineer('Amy3', 3, 'mcca0168@umn.edu', 'McAmy2001');
  expect(engineer.email).toEqual(expect.any(String));
});

test('that engineer has a github user name', () => {
  const engineer = new Engineer('Amy3', 3, 'mcca0168@umn.edu', 'McAmy2001');
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('that getRole returns the correct role', () => {
  const engineer = new Engineer('Amy3', 3, 'mcca0168@umn.edu', 'McAmy2001');
  expect(engineer.getRole()).toBe('Engineer');
});
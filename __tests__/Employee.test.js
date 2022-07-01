const Employee = require('../lib/Employee');

test('to see if emmployee has a name', () => {
  const employee = new Employee('Amy');
  expect(employee.name).toBe('Amy');
});

test('to see if employee has an ID', () => {
  const employee = new Employee('Amy', 1);
  expect(employee.id).toEqual(expect.any(Number));
});

test('to see if employee has an email', () => {
  const employee = new Employee('Amy', 1, 'mcca0168@umn.edu');
  expect(employee.email).toEqual(expect.any(String));
});

test('to see if getName() gets name', () => {
  const employee = new Employee('Amy');
  expect(getName()).toEqual(expect.StringContaining(player.name));
});




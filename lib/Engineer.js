// Additional Properties: github
// Additional Methods: getGithub(), getRole()(overrides to Engineer)
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
};

module.exports = Engineer;
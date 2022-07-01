// Additional Properties: github
// Additional Methods: getGithub(), getRole()(overrides to Engineer)
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    //this.github = github
  }
};

module.exports = Engineer;
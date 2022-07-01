// Additional Properties: school
// Additional Methods: getSchool(), getRole()(overrides to Intern)
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    //this.school = school;
  }
  
};

module.exports = Intern;
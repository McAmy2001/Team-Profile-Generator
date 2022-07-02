// Additional property: officeNumber
// Additional method: getRole()(Overridden to return Manager)

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;
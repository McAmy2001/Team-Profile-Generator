// Additional property: officeNumber
// Additional method: getRole()(Overridden to return Manager)

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    //this.office =
  }
};

module.exports = Manager;
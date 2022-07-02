const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID number?',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            return false;
          }
        }
      }
    ])
};

const employeeQuestions = () => {
  return inquirer
    .prompt(
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
      })
      .then(({action}) => {
        if (action === 'Add an engineer') {
          console.log("Add an engineer");
        }
        else if (action === 'Add an intern') {
          console.log('Add an intern');
        }
        else {
          console.log('Finish');
        }
      })
}; 



managerQuestions()
.then(answers => {
  //let managerInfo = answers;
  const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
  console.log(manager);
  //console.log(manager.office);
});
employeeQuestions()
.then(answers => {
  console.log(answers);
})
  

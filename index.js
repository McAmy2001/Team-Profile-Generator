const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const { writeToFile, copyFile } = require('./utils/generate-site');
const generateSite = require('./utils/generate-site');
const teamArray = [];

const managerQuestions = () => {
  console.log('Welcome to the team HTML file generator. Please answer all the questions.');
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID number?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter an ID number.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email address.')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?",
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter the office number.');
            return false;
          }
        }
      }
    ])
};

const addEngineer = () => {
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's name.")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's ID number?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the engineer's ID number.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the engineer's email address.")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub user name?",
      validate: githubInput => {
        if (githubInput) {
          return true; 
        } else {
          console.log("Please enter the engineer's GitHub user name.")
          return false;
        }
      }
    }
  ])
};

const addIntern = () => {
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's ID number?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the intern's ID number.")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the intern's email address");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
      validate: githubInput => {
        if (githubInput) {
          return true; 
        } else {
          console.log("Please enter the intern's school.")
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
          addEngineer().then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
            employeeQuestions();
          })
        }
        else if (action === 'Add an intern') {
          addIntern().then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
            employeeQuestions();
          })
        }
        else {
          console.log('Building page...');
          let pageHTML = generateHTML(teamArray)
          writeToFile('./dist/index.html', pageHTML);
          copyFile();
        }
      })
};




managerQuestions()
.then(answers => {
  const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
  teamArray.push(manager);
  employeeQuestions()
});

  

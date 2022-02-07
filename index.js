// node module
const inquirer = require('inquirer')



// class modules for each team member
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateTeam = require('./src/page-template')

const {writeFile, copyFile} = require('./src/generate-site')





const teamData = [];

// command line prompts 
const promptQuestions = async () => {

const promptAnswers = await inquirer
      .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name (Required)' , 
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter Manager name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID Number (Required)', 
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter your ID number');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail address (Required)', 
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your E-mail!');
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select your role (Required)', 
            choices:['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                  return true;
                } else {
                  console.log('Please select your role');
                  return false;
                }
              }
        },
      ])
      
      
      if(promptAnswers.role === 'Manager') {
        const managerInput = await inquirer
        .prompt([
          {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
          },
        ])
      
        const newManager = new Manager(
          promptAnswers.name,
          promptAnswers.id,
          promptAnswers.email,
          managerInput.officeNumber
        );

        teamData.push(newManager);

        } else if (promptAnswers.role === 'Engineer') {
          const engineerInput = await inquirer
          .prompt([
            {
            type: 'input',
            name: 'github',
            message: 'Enter your github username',
            },
          ])
          
          const newEngineer = new Engineer(
          promptAnswers.name,
          promptAnswers.id,
          promptAnswers.email,
          engineerInput.github
        );

        teamData.push(newEngineer)
       
        } else if (promptAnswers.role === 'Intern') {
          const internPrompt = await inquirer
          .prompt([
            {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
            },
          ])
          
          const newIntern = new Intern(
          promptAnswers.name,
          promptAnswers.id,
          promptAnswers.email,
          internPrompt.school,
          );  

          teamData.push(newIntern)
        }

        
        const addTeamMate = await inquirer
          .prompt([
            {
              type: 'list',
              name: 'addTeamate',
              message: 'Would you like to add a teammate?',
              choices: ['Add new teammate', 'Do not add teammate']
            }
          ])
        
          if (addTeamMate === 'Add new teammate'){
            return promptQuestions ()
          }

        

  };

                

promptQuestions()
.then(teamData => {
  return generateTeam(teamData)
})
.then(pageHTML => {
  return writeFile(pageHTML)
})
.then(writeFileResponse => {
  return copyFile(writeFileResponse)
})
.then(copyFileResponse => {
  console.log(copyFileResponse)
})
.catch(err => {
  console.log(err);
})


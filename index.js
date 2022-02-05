const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generatePage = require('./src/page-template')
const { writeFile, copyFile } = require('./src/generate-site')







const teamPrompt = teamData => {
  // if there is no 'files' array property, create one
  // if (!teamData.projects) {
  //   teamData.projects = [];
  // }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager Name (Required)' , 
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

    ])
};



// const enginner = () => {

//   return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Enter Enginner Name', 
//         validate: engNameInput => {
//             if (engNameInput) {
//               return true;
//             } else {
//               console.log('Please enter your name!');
//               return false;
//             }
//           }
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'Enter ID Number', 
//         validate: engIdInput => {
//             if (engIdInput) {
//               return true;
//             } else {
//               console.log('Please enter your ID number');
//               return false;
//             }
//           }
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Enter your e-mail address', 
//         validate: engEmailInput => {
//             if (engEmailInput) {
//               return true;
//             } else {
//               console.log('Please enter your E-mail!');
//               return false;
//             }
//           }
//     },

// ])
// };




teamPrompt()
.then(teamData => {
  return generatePage(teamData)
})
.then(pageHTML => {
  writeFile(pageHTML)
})

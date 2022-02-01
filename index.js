const inquirer = require('inquirer')


const teamPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager Name', 
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        },

    ])
}





teamPrompt()
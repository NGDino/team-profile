// Inquirer to get input
const inquirer = require('inquirer');

const promptUser = teamInfo => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your team members Name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('please enter a name')
                return false
            }
        }

    },
    {

    }
])
}



promptUser()

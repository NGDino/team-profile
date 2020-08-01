// Inquirer to get input
const inquirer = require('inquirer');
const {
    inflateRawSync
} = require('zlib');
const Engineer = require('./lib/Engineer');


const team = []


function getInfo() {
    inquirer.prompt([{
                type: 'input',
                name: "name",
                message: "Employees Name"
            },
            {
                type: 'input',
                name: "email",
                message: "what is their email address?"
            },
            {
                type: 'input',
                name: 'id',
                message: "enter employee ID"
            },
            {
                type: 'list',
                name: 'role',
                message: "Employee's role",
                choices: ["Manager", "Employee", "Engineer", "Intern"]
            }
        ])
        .then(answers => {
            console.log(answers);

            
            if (answers.role === 'Engineer') {
                const someEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role)
                console.log(someEngineer.getName())
                 console.log(someEngineer.getEmail())
                team.push(someEngineer);
            }else{console.log('Picked a different dude!')}
                
            // const someEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role)
            // console.log(someEngineer.getName())
            // console.log(someEngineer.getType())
            // team.push(someEngineer);
            // inquirer.prompt([{
            //         type: 'list',
            //         name: 'choice',
            //         message: "Want to add more?",
            //         choices: ["Manager", "Engineer", "Intern", "Done"]

            //     }])
                // .then(choice => {
                //     if (choice.choice === 'Engineer') {
                //         getInfo();
                //     } else if (choice.choice === 'Intern') {
                //         getInfo();
                //     } else {
                //         console.log(team);
                //     }
                // })
        })
}

getInfo();
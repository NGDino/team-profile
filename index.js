// Inquirer to get input
const inquirer = require('inquirer');
const {
    inflateRawSync
} = require('zlib');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')


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
            

            
            if (answers.role === 'Engineer') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'gitHub',
                    message: "Enter Engineer's GitHub"
                }])
                .then(ans => {
                    console.log(ans.gitHub)
                
                    const someEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, ans.gitHub )
                    team.push(someEngineer);
                    addMore()
                })
            }else if(answers.role === 'Manager') {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'office',
                        message: "Enter Managers office number"
                    }])
                    .then(ans => {
                        console.log(ans.office)
                    
                        const someManager = new Manager(answers.name, answers.email, answers.id, answers.role, ans.office )
                        team.push(someManager);
                        addMore()
                    })
                }else if(answers.role === 'Intern') {
                        inquirer.prompt([{
                            type: 'input',
                            name: 'school',
                            message: "Enter Interns school"
                        }])
                        .then(ans => {
                            console.log(ans.school)
                        
                            const someIntern = new Intern(answers.name, answers.email, answers.id, answers.role, ans.school )
                            team.push(someIntern);
                            addMore()
                        })
            }else{
                const someEmployee = new Employee(answers.name, answers.email, answers.id, answers.role)
                team.push(someEmployee)
                addMore()
            }

            function addMore() {
                inquirer.prompt([{
                    type: 'confirm',
                    name: 'addNew',
                    message: 'Would you Like to add another team member?'
                }])
                .then(res =>{
                    if (res.addNew === true){
                        getInfo(team)
                    }else{
                        console.log(team)
                    }
                })
                
            }
                
        })
}

getInfo();
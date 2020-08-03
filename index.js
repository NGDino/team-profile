//fs for writing file
const fs = require('fs')

// Inquirer to get input
const inquirer = require('inquirer');
const {
    inflateRawSync
} = require('zlib');

//links to constructor functions
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

// links to pages to generate content

const generatePage = require('./src/page-template')

const writeHTML = require('./generate-site')

// const { writeFile, copyFile } = require('./generate-site.js')

//team array
const team = []



// inquirer to collect data
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
            
            // specific questions based on role
            
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
                                                    
                            const someIntern = new Intern(answers.name, answers.email, answers.id, answers.role, ans.school )
                            team.push(someIntern);
                            addMore()
                        })
            }else{
                const someEmployee = new Employee(answers.name, answers.email, answers.id, answers.role)
                team.push(someEmployee)
                addMore()
            }
            //add another teamate.  Will start prompt over or precede to make the page
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
                        console.log('team', team)
                        let theCardsHTML = generatePage(team)
                        writeHTML(theCardsHTML)
                        // console.log('write file response', writeFileResponse)
                        // copyFile()
                        // console.log('copy file response', copyFileResponse)
                        // .catch(err => {
                        //     console.log(err)
                        // })

                    }
                    
                })
                
            }
                
        })
}

// function writeHTML(html){
//     fs.writeFile('./dist/index.html', html, err => {
//     if (err){
//          throw err
//     }
//     console.log("saved")
//     })
// }

getInfo();


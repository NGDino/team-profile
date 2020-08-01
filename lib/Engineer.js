/* needs following classes
    name
    id
    email
    getname()
    getId()
    getEmail()
    getRole()  overidden returns engineer
    github
    getGitHub()
    getRole
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, role, github) {
        super(name, email, id, role)
        this.github = github; 
    }
    getGihub() {
        return this.github; 
    }    
   }
module.exports = Engineer; 
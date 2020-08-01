/* needs following classes
    name
    id
    email
    getname()
    getId()
    getEmail()
    getrole() overidden to return manager
    officeNumber

*/

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, role, office) {
        super(id, name, email, role)
        this.office = office; 
    }
    getOffice() {
        return this.office; 
    }    
   
}
module.exports = Manager; 
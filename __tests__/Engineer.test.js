// test for name id and email and github
const { TestResult } = require("@jest/types");


const Employee = require('../lib/Employee');


// test for name, email, id, role validity


const testEngineer = new Employee("neil", "ndino@gmail.com", "3", "employee", "ngdino")

test('has a name', () => {
    expect(testEmployee.name).toEqual(expect.any(String))
    expect(testEmployee.name.length).toBeGreaterThan(2)
    
    
})

test('has a role of employee', () => {
    expect(testEmployee.role).toBe('employee')
})

test('Id has value', () =>{
    expect(testEmployee.id).toEqual(expect.any(Number))
})

test('has github')

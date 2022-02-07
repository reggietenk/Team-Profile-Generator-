const Employee = require('../lib/Employee')

// test for employees
test('creates an employee name', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name')



});
        
        
    

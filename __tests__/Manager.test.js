const Manager = require('../lib/Manager')

// test for manager
test('creates an employee name', () => {
    const manager = new Manager('name');

    expect(manager.name).toBe('name')



});
        
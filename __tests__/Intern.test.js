const Intern = require('../lib/Intern')

// test for intern
test('creates an employee name', () => {
    const intern = new Intern('name');

    expect(intern.name).toBe('name')



});
        
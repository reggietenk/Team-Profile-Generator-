const Intern = require('../lib/Intern')

test('creates an employee name', () => {
    const intern = new Intern('name');

    expect(intern.name).toBe('name')



});
        
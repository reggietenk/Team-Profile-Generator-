const Engineer = require ('../lib/Engineer')

test('creates an employee name', () => {
    const engineer = new Engineer('name');

    expect(engineer.name).toBe('name')



});
        
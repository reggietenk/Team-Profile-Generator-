const Engineer = require ('../lib/Engineer')

// test for engineer
test('creates an employee name', () => {
    const engineer = new Engineer('name');

    expect(engineer.name).toBe('name')



});
        
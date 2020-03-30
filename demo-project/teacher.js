const Person = require('./person');

class Teacher extends Person {
    constructor(id, firstName, lastName, dateOfBirth, address) {
        super(id, firstName, lastName, dateOfBirth, address);
        this.type = 'Teacher';
    }
}

module.exports = Teacher;

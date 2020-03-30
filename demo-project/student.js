const Person = require('./person');

class Student extends Person {
    constructor(id, firstName, lastName, dateOfBirth, address, subjects) {
        super(id, firstName, lastName, dateOfBirth, address);
        this.subjects = subjects;
        this.type = 'Student';
    }
}

module.exports = Student;

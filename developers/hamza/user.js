class User { 
    constructor(id, firstName, lastName, dateOfBirth, address, ratings) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.ratings = ratings;
        this.type = 'User';
    }
}

module.exports = User;

// Excellent
 
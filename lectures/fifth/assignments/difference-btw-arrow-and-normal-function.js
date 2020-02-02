// call by using arrow and normal function
// and let me know how they print the name by using `this` object in them.

this.firstName = 'Sajjad';
this.lastName = 'Ali';

let user = {
    firstName: 'Taimoor',
    lastName: 'Ali',
    getUserName: () => this.firstName + ' ' + this.lastName
}

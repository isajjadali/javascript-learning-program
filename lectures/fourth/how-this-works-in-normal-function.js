this.fName = 'Taimoor';
this.lName = 'Haider';

let user = {
    fName: 'Sajjad',
    lName: 'Ali',
    getFullName: function () {
        this
        return 'User Name: ' + this.fName + ' ' + this.lName;
    }
}

let user2 = {
    fName: 'hamza',
    lName: 'Ali',
    getFullName: function () {
        return 'User Name: ' + this.fName + ' ' + this.lName;
    }
}

console.log(user.getFullName());   // print `User Name: Sajjad Ali`
console.log(user2.getFullName());   // print `User Name: Sajjad Ali`

// Because normal function here is called by the refrence of user.

// Now the question is how we know that getFullName is called by user refrence ? 

// Answer:
// we are calling it like this `user.getFullName()` here the object `user` before `.getFullName()` 
// is the object which is passed as a refrence of this in `getFullName` function
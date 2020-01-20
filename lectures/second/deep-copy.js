let user = {
    name: {
        firstName: 'Sajjad',
        lastName: 'Ali',
    },
    address: 'Not Available',
    phoneNumber: '0324-666666',
    value: 21,
};

let newUser = JSON.parse(JSON.stringify(user))
newUser.address = 'changed'; // changed only the newUser value
newUser.name.firstName = 'Taimoor'; // changed only the newUser value

console.log(user, 'user');
console.log(newUser, 'newUser');
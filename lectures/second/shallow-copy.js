let user = {
    name: {
        firstName: 'Sajjad',
        lastName: 'Ali',
    },
    address: 'Not Available',
    phoneNumber: '0324-666666',
    value: 21,
};

let newUser = Object.assign({}, user);
newUser.address = 'changed'; // changed only the newUser value
newUser.name.firstName = 'Taimoor'; // changed both because of shallow copy

console.log(user, 'user');
console.log(newUser, 'newUser');
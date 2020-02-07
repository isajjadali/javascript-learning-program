function printUserName() {
    console.log(this.name);
}


let users = [{
    name: 'Ali',
}, {
    name: 'Ammar',
}, {
    name: 'Hamza',
}, {
    name: 'Sajjad',
}];


users.forEach(user => printUserName.call(user));
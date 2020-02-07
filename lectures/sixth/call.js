function printDetails(phoneNumber = '') {
    console.log(this.name + ' ' + this.age + ' ' + phoneNumber);
}

printDetails('03244406223');  // print `undefined undefined 03244406223`

let user = {
    name: 'sajjad',
    age: 24,
}

printDetails.call(user) // print `sajjad 24`
printDetails.call(user, '03244406223') // print `sajjad 24 03244406223`

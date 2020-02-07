function printDetails(phoneNumber = '', score = 0) {
    console.log(this.name + ' ' + this.age + ' ' + phoneNumber + ' ' + score);
}

printDetails('03244406223', 2);  // print `undefined undefined 03244406223 2`

let user = {
    name: 'sajjad',
    age: 24,
}

printDetails.apply(user) // print `sajjad 24  0`
printDetails.apply(user, ['03244406223', 2]) //print `sajjad 24 03244406223 2`

printDetails.apply(user, '03244406223') // give error becuase you have to pass arguments in array

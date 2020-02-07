function printDetails(phoneNumber = '', score = 0) {
    console.log(this.name + ' ' + this.age + ' ' + phoneNumber + ' ' + score);
}

printDetails('03244406223', 2);  // print `undefined undefined 03244406223 2`

let user = {
    name: 'sajjad',
    age: 24,
}


let x = printDetails.bind(user, '03244406223', 2) // print never pass other arguments there except the first one
// issue while passing arguments as above
x('123', 9);  //print `sajjad 24 03244406223 2` but it should print `sajjad 24 123 9`

// Solution

let y = printDetails.bind(user);
y('123', 9);  // now it will print `sajjad 24 123 9`
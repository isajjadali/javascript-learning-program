// Note: when we are using (...) wherever in file it is called spread operator but when we use (...) in function defination
// as a parameter so it is called rest operator

// Example


function sum(...rest) { // here these three dots are called rest operator
    return rest[0] + rest[1] + rest[2];
}

let array = [1, 2, 3, 4];

console.log(sum(...array)); // here these three dots are called spread operator

// What Happened in above example

// when we passed arguments while calling an array it will spread the array elements 
// and when we use ...rest in parameter it will combine all the spread elements and make it an array
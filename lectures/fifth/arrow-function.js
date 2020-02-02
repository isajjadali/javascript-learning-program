// NOTE: A function without name is call anonymous function

// Example
var name = function () {
    return 'sajjad'
}
console.log(name());

// here function is anonymous and we are assigning the refrence of anonymous function to a variable name function

// Arrow function Examples
let incremental = x => x + 1; 

// we have to use paranthesis for more than one parameters
let sum = (x, y) => x + y;   // return the sum of x and y

// we have to use paranthesis if we want to return an object in arrow function
let sum = (x, y) => ({ result: x + y }); // return an object e.g
// {
//     results: 3
// }



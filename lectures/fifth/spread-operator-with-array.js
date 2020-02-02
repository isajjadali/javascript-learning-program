let x = [1, 2, 3]
let y = [4, 5, 6]
let z = [0, ...x, ...y, 9, 10]; // spread the values of x and y and make another array and assign to z

console.log(x, 'x');
console.log(y, 'y');
console.log(z, 'z');

// Another Example

function sum(x, y, z) {
    return x + y + z;
}

let array = [1, 2, 3, 4];

console.log(sum(...array));

// we are spreading the elements in array and passing as arguments in sum
// so the first element of array is assign to x
// the second element of array is assign to y
// and the third element of array is assign to z
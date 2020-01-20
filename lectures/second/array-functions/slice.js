let array = [1, 2, 3, 4, 5];

console.log(array.slice(2));        // shows [3, 4, 5], returned selected element(s).

console.log(array.slice(-2));       // shows [4, 5], returned selected element(s).

console.log(array);                 // shows [1, 2, 3, 4, 5], original array remains intact.

let array2 = [6, 7, 8, 9, 0];

console.log(array2.slice(2, 4));     // shows [8, 9]

console.log(array2.slice(-2, 4));    // shows [9]

console.log(array2.slice(-3, -1));   // shows [8, 9]

console.log(array2);                // shows [6, 7, 8, 9, 0]
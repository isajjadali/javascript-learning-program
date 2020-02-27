let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// End Result Should Be
// {
//     '0': 1,
//     '1': 2,
//     '2': 3,
//     '3': 4,
//     '4': 5,
//     '5': 6,
//     '6': 7,
//     '7': 8,
//     '8': 9,
// }


// Way 1
let y = {};
x.forEach((item, index) => {
    y[index] = item;
});


// Way 2
let z = x.reduce((acc, element, index) => {
    acc[index] = element;
    return acc;
}, {});

console.log(y, 'y');

console.log(z, 'z');
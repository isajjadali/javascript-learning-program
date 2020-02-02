
function sum(...rest) {
    return rest[0] + rest[1] + rest[2] + rest[3];
}

let array = [1, 2, 3, 4];

console.log(sum(...array));



// function sum(x, y, z) {
//     return x + y + z;
// }

// let array = [1, 2, 3, 4];

// console.log(sum(...array));
























































// let users = [
//     {
//         name: 'sajjad',
//         age: 24,
//     }, {
//         name: 'taimoor',
//         age: 25,
//     }, {
//         name: 'naqi',
//         age: 23,
//     }
// ];

// console.log(users.map(({ name, age }) => ({ name, age: age * 2 })));




























// function getTriplets(array) {
//     let maxValue = -1;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             for (let k = j + 1; k < array.length; k++) {
//                 if (array[i] <= array[j] && array[j] <= array[k]) {
//                     let sum = array[i] + (array[j] * array[k]);
//                     if (sum > maxValue) {
//                         maxValue = sum;
//                     }
//                 }
//             }
//         }
//     }
//     return maxValue;
// }

// console.log(getTriplets([13, 16, 2, 7, 3, 18, 19, 6, 15, 11, 17]));
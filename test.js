




























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
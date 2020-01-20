let array = [1, 2, 3, 4];

function modifyArray(parameter) {
    parameter.push(5);   // remember the concept of call by reference
}

modifyArray(array);

console.log(array); 
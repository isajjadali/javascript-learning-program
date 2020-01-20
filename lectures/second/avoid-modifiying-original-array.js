let array = [1, 2, 3, 4];

function modifyArray(parameter) {
    const newArray = Object.assign([], parameter);  // shallow copy
    newArray.push(5);
    console.log(newArray, 'newArray');
}

modifyArray(array);

console.log(array, 'array'); 
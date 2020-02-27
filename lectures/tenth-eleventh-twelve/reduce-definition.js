Array.prototype.reduce1 = function (callback, accumulator) {
    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
}


let array = [1, 2, 3, 4, 5, 6, 7];

let sum = array.reduce1((acc, element) => {
    return acc + element;
}, 0);

console.log(sum);
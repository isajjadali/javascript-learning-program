Array.prototype.filter = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
}

let array = [1, 2, 3, 4, 5, 6];

let array2 = array.filter((item) => {
    return item % 2 === 0;
});

console.log(array2);
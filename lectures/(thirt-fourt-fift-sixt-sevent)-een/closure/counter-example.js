function getCounter() {
    let counter = 0;

    return {      // an object having closure functions
        increment: function (value) {
            counter += value;
        },
        retreive: function () {
            return counter;
        }
    }
}



let x = getCounter();

x.increment(10);
x.increment(10);
x.increment(10);

console.log(x.retreive());

x.increment(10);
x.increment(10);

console.log(x.retreive());

x.increment(10);
x.increment(10);
x.increment(10);
x.increment(10);
x.increment(10);
x.increment(10);
x.increment(10);

console.log(x.retreive());

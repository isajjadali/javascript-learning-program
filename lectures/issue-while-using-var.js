var value = 10;

function printValue() {
    console.log(value);
    var value = 20;   // remember the concept of hoisting here
}

printValue();
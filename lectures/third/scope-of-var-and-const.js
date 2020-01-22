function printValue() {
    let x = 10;

    if (true) {
        var value = 20;
        let x = 20;
        let y = 140;
        console.log(x, 'x in internal scope of if');
    }
    console.log(value, 'value is hoisted to the function level due to var');
    console.log(x, 'x in internal scope of function');
    console.log(y, 'y gives error because it is defined in internal scope of if');
}

printValue();
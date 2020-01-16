const value = 20;

function printValue() {
    const value = 30;  // declared it in inner scope
    console.log(value, 'innerValue');
}

printValue();

console.log(value, 'outerValue');

value = 40;    // it gives error as value is constant
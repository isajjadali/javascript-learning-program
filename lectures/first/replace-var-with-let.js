let value = 10;

function printValue() {
    console.log(value);     // give error because it will see that same variable is defined in its scope 
    let value = 20;
}

printValue();
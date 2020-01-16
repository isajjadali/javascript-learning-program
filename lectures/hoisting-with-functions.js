sum(10, 5);   // it will run because it will hoist and declare

function sum(a, b) {    // function defination
    return a + b;
}

multiple(10, 5);  // it gives error because of hoisting concept


var multiple = function (a, b) {    // function expression
    return a * b;
}
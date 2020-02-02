// Note: We have a variable in every function named `arguments` which is actually an array and it contains the arguments you
// pass when you call a function

function sum() {
            // 1            // 2            //3
    return arguments[0] + arguments[1] + arguments[2]
}

console.log(sum(1, 2, 3)); // return 6 as arguments have these 3 arguments in it




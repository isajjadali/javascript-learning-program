function printUserName(user = {}) {
    return user.name;
}

console.log(printUserName({ name: 'sajjad' })); // print sajjad as we are passing an object with name property in it
console.log(printUserName()); // print undefined as default parameter value is assign to it

console.log(printUserName(null)); // Error: cannot read property of null. Now question is
// why error occured?
// Answer: because null is consider as an argument and default parameter is not assigned and when it return user.name which means (null.name)
// and we can't use dot property on null. So it will send an error.

// SOLUTION

function solutionOfPrintUserName(user = {}) {
    if (user) {
        return user.name;
    }
}

function secondSolutionOfPrintUserName(user = {}) {
    return user && user.name;
}

function thirdSolutionOfPrintUserName(user = {}) {
    return user ? user.name : undefined;
}

console.log(solutionOfPrintUserName(null)); //as if condition become false function by default return undefined
console.log(secondSolutionOfPrintUserName(null)); // as user is null so it will return null becuase we know in && operator it will 
// return the last true value and if no condition is true so it will return first value which in this case null

console.log(thirdSolutionOfPrintUserName(null)); // as user is null so it will return the else condition of ternary operator which is undefined

// console.log(printUserName(null));

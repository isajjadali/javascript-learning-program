function sum(x = 2, y = 3) {
    return x + y;
}


console.log(sum(1, 2));  // return 3 as we are passing arguments here so no default parameter assinged
console.log(sum(undefined, 10)); // return 12 as we are not passing first parameter so it will assign the default paramter to x
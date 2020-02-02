function sum(x = 2, y = 3) {
    return x + y;
}


console.log(sum(1, 2));  // return 3 as we are passing arguments here so no default parameter assinged

console.log(sum(null, 10)); // return 10 as sum conside null as an argument so it will not assign the default parameter value to x
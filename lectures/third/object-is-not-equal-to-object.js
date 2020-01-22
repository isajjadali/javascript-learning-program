let x = {};
let y = {};

console.log(x === y); // return false because it check that refernce of x is equal to reference of y, and they are never equal

x = 10;
y = 10;

console.log(x === y); // return true because it check the value not refernce as they are primitive type values
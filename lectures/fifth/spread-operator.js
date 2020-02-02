// Note: Spread operator is (...) these 3 dots. and it is used to spread the elements as well as for shallow copy
// Example
// As we know already how to make a shallow copy of an object, but we have a problem with it

let obj = { a: 2 };
let obj1 = { b: 3 };

let obj2 = Object.assign(obj, obj1);

console.log(obj2, 'obj2');
console.log(obj, 'obj'); // here you can see it update obj too.
// What happened here
// the values of obj1 is assigned in obj and then it assign that object to obj2
// so while assigning value of obj1 to obj it update the value of obj

// Solutions

// First
let obj3 = { a: 2 };
let obj4 = { b: 3 };

let obj5 = Object.assign({}, obj3, obj4);

console.log(obj5, 'obj5');
console.log(obj3, 'obj3'); // here you can see obj is not updated.


// Second and the best
let obj6 = { a: 2 };
let obj7 = { b: 3 };

let obj8 = { ...obj6, ...obj7 };  // made another object by shallow copying values of obj6 and obj7

console.log(obj8,'obj8');
console.log(obj6,'obj6');

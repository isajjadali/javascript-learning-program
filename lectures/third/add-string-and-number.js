console.log(10 + '20'); // result = '1020'
console.log(10 + +'20'); // result = 30
console.log(+'20'); // convert into number

// Note: in case of minus sign it will parse string into number no matter what
console.log(10 + -'20'); // result = -10
console.log('20' - 10); // result = 10
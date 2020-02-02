let products = [
    {
        name: "chair",
        inventory: 5,
        unitPrice: 45
    },
    {
        name: "table",
        inventory: 10,
        unitPrice: 123
    },
    {
        name: "sofa",
        inventory: 2,
        unitPrice: 399
    }
];


// Required: Make an array of object having this type of object in it
// let product = ['ammar', 'sajjad', 'ali', 'hamza'];

let products1 = products.map(function (item) {
    return {
        [item.name]: {
            stock: item.inventory,
            price: {
                value: item.unitPrice,
            }
        },
        sample: 2
    };
});

// now products1 is in this form 
// [
//     {
//       "chair": {
//         "stock": 5,
//         "price": {
//           "value": 45
//         }
//       },
//       "sample": 2
//     },
//     {
//       "table": {
//         "stock": 10,
//         "price": {
//           "value": 123
//         }
//       },
//       "sample": 2
//     },
//     {
//       "sofa": {
//         "stock": 2,
//         "price": {
//           "value": 399
//         }
//       },
//       "sample": 2
//     }
//   ]

console.log('\nModified State\n', JSON.stringify(products1, null, 2));
console.log('\n\n\n Back to Original State');
// Convert back into previous State

let products2 = products1.map(function (item) {
    return {
        name: Object.keys(item)[0],
        inventory: item[Object.keys(item)[0]].stock,
        unitPrice: item[Object.keys(item)[0]].price.value
    }
})

console.log(JSON.stringify(products2, null, 2));

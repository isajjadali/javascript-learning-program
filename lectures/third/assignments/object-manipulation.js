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


// Hint: you can google the map function for it and figure it out how you can do it



// OUTPUT BE LIKE THIS ARRAY

// [
//     {
//         "chairs": {
//             stock: 5,
//             price: {
//                 value: 45,
//             }
//         }
//     },
//     {
//         "table": {
//             stock: 10,
//             price: {
//                 value: 123,
//             }
//         }
//     },
//     {
//         "sofa": {
//             stock: 2,
//             price: {
//                 value: 399,
//             }
//         }
//     },
// ];
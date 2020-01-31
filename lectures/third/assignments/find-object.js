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

// print the object having name is equals to 'table'

console.log(products.find(item => item.name === 'sajjad').unitPrice);

// Hint: You can use products.find method for further info google this function
const User = require('./user');
const Order = require('./order');

let array = [

    new User(
        1,
        'Sajjad',
        'Ali',
        { day: 20, month: 6, year: 1995 },
        [
            { street: 'garhi shahu', houseNo: 2, city: 'lahore' },
            { street: 'garhi shahu', houseNo: 2, city: 'lahore' }
        ],
        [
            { description: 'it should be a string always', score: 5 },
            { description: 'it should be a string always', score: 5 }
        ]
    ),
    new User(
        2,
        'Ali',
        'Khan',
        { day: 17, month: 1, year: 1984 },
        [
            { street: 'Model Town', houseNo: 768, city: 'lahore' },
            { street: 'Model Town', houseNo: 768, city: 'lahore' }
        ],
        [
            { description: 'Rating is', score: 2 },
            { description: 'Rating is', score: 2 }
        ]
    ),
    new User(
        3,
        'Khalid',
        'Murad',
        { day: 20, month: 6, year: 1985 },
        [
            { street: 'Shadra', houseNo: 2, city: 'lahore' },
            { street: 'Shadra', houseNo: 2, city: 'lahore' }
        ],
        [
            { description: 'Description is', score: 3 },
            { description: 'Description is', score: 3 }
        ]
    ),
    new User(
        4,
        'Ammar',
        'Hammed',
        { day: 20, month: 6, year: 1990 },
        [
            { street: 'Shamlimar', houseNo: 2, city: 'lahore' },
            { street: 'Shamlimar', houseNo: 2, city: 'lahore' }
        ],
        [
            { description: 'Rating is', score: 2 },
            { description: 'Rating is', score: 2 }
        ]
    ),


    new Order(
        1,
        1,
        'Dinein',
        new Date().toLocaleTimeString(),
        {
            beforeDiscount: 200,
            discount: 15,  
            afterDiscount: 160,
            tax: 10, 
            totalPrice: 176,
        },
        [
            {
                id: 1,
                name: 'biryani',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    }
                ]

            },

            {
                id: 1,
                name: 'karahi',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    }
                ]

            },

        ]
    ),

    new Order(
        2,
        3,
        'takeaway',
        new Date().toLocaleTimeString(),
        {
            beforeDiscount: 200,
            discount: 15,  
            afterDiscount: 160,
            tax: 10, 
            totalPrice: 176,
        },
        [
            {
                id: 1,
                name: 'biryani',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'normal',   
                        feedbacks: [
                            {
                                description: 'bad',
                                score: 1 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'normal',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    }
                ]

            },

            {
                id: 1,
                name: 'karahi',
                quantities: [
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 
                            },
                            {
                                description: 'normal',
                                score: 3 
                            },
                            {
                                description: 'so so',
                                score: 2 
                            }
                        ]
                    }
                ]

            },

        ]
    ),


];


module.exports = function () {
    return new Promise((resolve, reject) => {
        resolve(array);
    })
}


// what is this?

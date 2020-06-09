const OrderObj = require('./order');



let allOrdersobj = [

    new OrderObj(
        1, 
        1, 
        'Dinein', 
        new Date().toLocaleTimeString(),
        {
            beforeDiscount: 200,
            discount: 15,  // it actually in percentage that means it is 15%
            afterDiscount: 160,
            tax: 10, // it actually in percentage that means it is 10%
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
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
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
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
                            }
                        ]
                    }
                ]

            },

        ]
    ),
    
    new OrderObj(
        2, 
        3, 
        'takeaway', 
        new Date().toLocaleTimeString(),
        {
            beforeDiscount: 200,
            discount: 15,  // it actually in percentage that means it is 15%
            afterDiscount: 160,
            tax: 10, // it actually in percentage that means it is 10%
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
                        type: 'normal',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'bad',
                                score: 1 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'normal',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
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
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
                            }
                        ]
                    },
                    {
                        size: 'half',
                        quantity: 2,
                        type: 'spicy',   // type should be  'spicy', 'normal', 'exta spicy'
                        feedbacks: [
                            {
                                description: 'good one',
                                score: 5 // in between 1 to 5
                            },
                            {
                                description: 'normal',
                                score: 3 // in between 1 to 5
                            },
                            {
                                description: 'so so',
                                score: 2 // in between 1 to 5
                            }
                        ]
                    }
                ]

            },

        ]
    ),


];


module.exports = function(uId) {
    return new Promise((resolve, reject) => {
        resolve(allOrdersobj.filter(element => element.userId === uId));
    })
}
// Excellent

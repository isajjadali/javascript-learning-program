const Order = require('./order'); 

 

let allOrders = [

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


module.exports = function(userId) {
    return new Promise((resolve, reject) => {
        resolve(allOrders.filter(element => element.userId === userId)); 
    })
}

// Excellent

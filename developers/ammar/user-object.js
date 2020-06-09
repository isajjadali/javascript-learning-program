const Userobj = require('./user');

let allUsersObj = [

    new Userobj(
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
    new Userobj(
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
    new Userobj(
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
    new Userobj(
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
    )

];

//console.log(allUsers);

module.exports = function () {
    return new Promise((resolve, reject) => {
        resolve(allUsersObj);
    })
}

// Excellent

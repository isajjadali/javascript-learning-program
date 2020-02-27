let users = [
    {
        name: {
            firstName: 'Sajjad',
            lastName: 'Ali',
        },
        age: {
            value: 24,
            dateOfBirth: {
                year: 1995,
                month: 'june',
                date: 20,
            },
        },
        subjects: [
            {
                math: 80
            },
            {
                english: 70
            },
            {
                urdu: 75
            },
            {
                computer: 90
            }
        ]
    },
    {
        name: {
            firstName: 'Taimoor',
            lastName: 'Ali',
        },
        age: {
            value: 25,
            dateOfBirth: {
                year: 1994,
                month: 'August',
                date: 20,
            },
        },
        subjects: [
            {
                math: 90
            },
            {
                english: 80
            },
            {
                urdu: 85
            },
            {
                computer: 95
            }
        ]
    }
];


let users2 = users.map(user => {
    return {  
        name: `${user.name.firstName} ${user.name.lastName}`,
        age: user.age.value,
        dateOfBirth: user.age.dateOfBirth.year + ' ' + user.age.dateOfBirth.month + ' ' + user.age.dateOfBirth.date,
        subjects: user.subjects.map(subject => {
            return {
                subjectName: Object.keys(subject)[0],
                score: Object.values(subject)[0],
            }
        })
    }
});


console.log('--------------------------------------->>>>>');
console.log(JSON.stringify(users2,null,2));
console.log('--------------------------------------->>>>>');



// Output should be like this
// [
//     {
//         name: 'Sajjad Ali',
//         age: 24,
//         dateOfBirth: '1995 june 20',
//         subjects: [
//             {
//                 subjectName: 'math',
//                 score: 80
//             },
//             {
//                 subjectName: 'english',
//                 score: 70
//             },
//             {
//                 subjectName: 'urdu',
//                 score: 75
//             },
//             {
//                 subjectName: 'computer',
//                 score: 90
//             }
//         ]
//     },
//     {
//         name: 'Taimoor Ali',
//         age: 25,
//         dateOfBirth: '1994 August 20',
//         subjects: [
//             {
//                 subjectName: 'math',
//                 score: 90
//             },
//             {
//                 subjectName: 'english',
//                 score: 80
//             },
//             {
//                 subjectName: 'urdu',
//                 score: 85
//             },
//             {
//                 subjectName: 'computer',
//                 score: 95
//             }
//         ]
//     }
// ];



// Assignment 2

// Now reverse output to its original state as declared above
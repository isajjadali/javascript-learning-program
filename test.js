let users = [
    {
        subjects: [
            {
                math: 21,
            },
            {
                english: 31,
            },
            {
                urdu: 41,
            },
            {
                chemistry: 51,
            }
        ]
    }
]

// output

// let x = {
//     subjects: {
//         math: 21,
//         english: 31,
//         urdu: 41,
//         chemistry: 51,
//     }
// }


let y = users.map(user => {
    return {
        subjects: user.subjects.reduce((acc, element) => {

            let key = Object.keys(element)[0];
            acc[key] = element[key];

            acc['math'] = element['math'];

            return acc;
        }, {})
    }
});

console.log(JSON.stringify(y, null, 2));

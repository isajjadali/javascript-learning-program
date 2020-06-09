function x(id) {
    return new Promise((res, rej) => {
        res({ id });
    })
}

function y() {
    let promises = [];

    [1, 2, 3, 4, 5].forEach(item => {
        promises.push(x(item));
    });

    return Promise.all(promises)
        .then(res => {
            return (id) => res.filter(value => value.id === id);
        });

    // return (id) => obj.filter(id1 => id1 === id);

}

let filterData = y();

filterData.then(filteringData => {

    console.log('--------------------------------------->>>>>');
    console.log(filteringData(2));
    console.log('--------------------------------------->>>>>');
})

// return ()=>{

// }





























// let users = [
//     {
//         subjects: [
//             {
//                 math: 21,
//             },
//             {
//                 english: 31,
//             },
//             {
//                 urdu: 41,
//             },
//             {
//                 chemistry: 51,
//             }
//         ]
//     }
// ]

// // output

// // let x = {
// //     subjects: {
// //         math: 21,
// //         english: 31,
// //         urdu: 41,
// //         chemistry: 51,
// //     }
// // }


// let y = users.map(user => {
//     return {
//         subjects: user.subjects.reduce((acc, element) => {

//             let key = Object.keys(element)[0];
//             acc[key] = element[key];

//             acc['math'] = element['math'];

//             return acc;
//         }, {})
//     }
// });

// console.log(JSON.stringify(y, null, 2));

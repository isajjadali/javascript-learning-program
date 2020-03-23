// callback syntax

function sum(value, value1, callback) {
    let result = value + value1;
    if (result > 10) {
        return callback('sum of value and value1 should not be greater than 10', null);
    }
    callback(null, result);
}

sum(5, 4, (err, result) => {
    if (err)
        console.log(err, 'err');
    console.log(result, 'result');
});


// promise syntax

function sum1(value, value1) {
    let result = value + value1;
    return new Promise((resolve, reject) => {
        if (result > 10) {
            return reject('sum of value and value1 should not be greater than 10');
        }
        resolve(result);
    });
}

sum1(5, 4)
    .then(res => {
        console.log(res, 'res');
    })
    .catch(err => {
        console.log(err, 'err');
    })

function a(parameter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parameter + 1);
        }, 1000)
    })
}

function b(parameter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parameter + 2);
        }, 1000)
    })
}

function c(parameter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parameter + 3);
        }, 1000)
    })
}


a(5)
    .then((res1) => {
        console.log('result of a', res1);
        return b(res1);
    })
    .then((res2) => {
        console.log('result of b', res2);
        return c(res2);
    })
    .then(res3 => {
        console.log('result of c', res3);
    })
    .catch(err => {
        console.log(err, 'err');
    })

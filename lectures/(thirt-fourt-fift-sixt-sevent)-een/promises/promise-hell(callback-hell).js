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
    .then(result => {
        return b(result)
            .then(res => {
                return c(res)
                    .then(finalResult => {
                        console.log(finalResult, 'finalResult');
                    })
                    .catch(error => {
                        console.log(error, 'error');
                        return error;
                    })
            })
    });

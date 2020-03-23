// first see all lectures on promises

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

// Promises syntax
console.log('Promises');
a(5)
    .then(res => {
        console.log('result of a', res);
        return b(res);
    })
    .then(res => {
        console.log('result of b', res);
        return c(res);
    })
    .then(res => {
        console.log('result of c', res);
    })
    .catch(err => {
        console.log(err, 'err');
    })

// Async Await Syntax

async function y() {

    let resultOfa = await a(5).catch(err => console.log(err, 'err of a'));

    let resultOfb = await b(resultOfa).catch(err => console.log(err, 'err of b'));

    let resultOfc = await c(resultOfb).catch(err => console.log(err, 'err of c'));

    console.log('\n\n\nasync await');
    console.log(resultOfa, 'resultOfa');
    console.log(resultOfb, 'resultOfb');
    console.log(resultOfc, 'resultOfc');

}


y();

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ali');
        }, 1000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hamza');
        }, 1000)
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ammar');
        }, 1000)
    })
}

function d() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sajjad');
        }, 1000)
    })
}

// Now we want to print "all data fetched" when all promise will be resolved
//  First approach
a()
    .then(res => {
        console.log(res);
        return b();
    })
    .then(res => {
        console.log(res);
        return c();
    })
    .then(res => {
        console.log(res);
        return d();
    })
    .then(res => {
        console.log(res);

        console.log('--------------------------------------->>>>>');
        console.log('all data fetched');
        console.log('--------------------------------------->>>>>');
    })

// Issue in first approach is that we are calling b() when a(), it means b is dependent on a
// and we want to call all promises in parallel

// so we use promise.all function

Promise.all([
    a(),
    b(),
    c(),
    d()
])
    .then(res => {
        console.log(res);
        console.log('all data fetched');
    })
    .catch(err => {
        console.log(err, 'err');
    })


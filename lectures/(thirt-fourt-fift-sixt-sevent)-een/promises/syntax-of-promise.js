let promise = new Promise((resolve, reject) => {
    resolve(20);
});    // right now promise is in pending state

promise
    .then(res => {                  // it runs if promise will resolve
        console.log(res, 'res');
    })
    .catch((err) => {               // it runs if promise reject
        console.log(err, 'err');
    })
    .finally(() => {                // it runs if any catch or then execute
        console.log('finally');
    })


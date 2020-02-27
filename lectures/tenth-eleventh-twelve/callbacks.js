function x(callback) {
    callback(null, 'error');
}


function y(callback) {
    x(callback);
    console.log('y');
}

function z(callback) {
    y(callback);
    console.log('z');
}


z((value, error) => {
    console.log(value);
});
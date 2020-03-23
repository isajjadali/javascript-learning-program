let users = [
    {
        a: 1,
        b: 2,
        c: 3
    },
    {
        a: 2,
        b: 2,
        c: 2
    }, {
        a: 3,
        b: 3,
        c: 3
    }, {
        a: 4,
        b: 4,
        c: 4
    },
];

function abc(array) {

    return function (key) {              // that is a closure function
        let sum = 0;
        array.forEach(element => {
            sum = sum * element[key];
        });

        console.log(sum);
        return sum;
    }

}

let d = abc(users);
d('a');
d('b');
d('c');

Array.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

let users = [
    {
        name:'Hamza',
    },
    {
        name:'Ammar',
    },
    {
        fName:'Ali',
    }
];

let result = users.some((item) => {
    return item.name;
});

console.log(result);  // return true becuase some objects have a key of name
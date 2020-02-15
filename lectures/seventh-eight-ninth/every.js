Array.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
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

let result = users.every((item) => {
    return item.name;
});

console.log(result);  // return false becuase all the objects in users array don't have a key of name
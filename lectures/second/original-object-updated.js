let object = {
    name: 'sajjad',
};

function modifyObject(obj) {
    obj.name = 'ali';   // remember the concept of call by reference
}

modifyObject(object);

console.log(object); 
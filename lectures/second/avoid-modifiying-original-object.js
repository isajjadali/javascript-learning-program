let object = {
    name: 'sajjad',
};

function modifyObject(obj) {
    const newObject = Object.assign({}, obj); // shallow copy
    newObject.name = 'ali';   // remember the concept of call by reference
    console.log(newObject, 'newObject');
}

modifyObject(object);

console.log(object, 'object'); 
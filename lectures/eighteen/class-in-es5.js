function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {        // we should write this on prototype as we wrote getNameAge function
        return this.name;
    }
    this.getAge = function () {
        return this.age;
    }
}

Person.prototype.getNameAge = function () {
    return `Age of ${this.name} is ${this.age}`;
}


let user = new Person('Sajjad Ali', 25);

console.log(user.getName());
console.log(user.getAge());
console.log(user.getNameAge());

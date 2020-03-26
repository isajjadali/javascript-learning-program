class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {        // we should write this on prototype as we wrote getNameAge function
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getNameAge() {
        return `Age of ${this.name} is ${this.age}`;
    }
}


let user = new Person('Sajjad Ali', 25);

console.log(user.getName());
console.log(user.getAge());
console.log(user.getNameAge());

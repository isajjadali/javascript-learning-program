// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.getName = function () {
//     return this.name;
// }

// Person.prototype.getAge = function () {
//     return this.age;
// }

// function Teacher(name, age, subject) {

//     Person.call(this, name, age);

//     this.subject = subject;
// }



class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

}


let user = new Person('sajjad', '25');
let teacher = new Teacher('Ali', '26', 'math');




console.log('--------------------------------------->>>>>');
console.log(user);
console.log(teacher);
console.log('--------------------------------------->>>>>');

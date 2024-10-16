'use strict';

// Constructor Function - This is like template, Think of it like a blueprint for making multiple similar objects with the same properties and methods.

function User (name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
}

const Deepanshu = new User ('Deepanshu Choudhary', 25, true);
const Anshu = new User ('Anshu Choudhary', 17, false);

console.log(Deepanshu.age);
console.log(Anshu.age);
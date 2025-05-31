"use strict";

let animal = {
  type: "Generic Animal",
  canEat: true,
  canWalk: true,
  sound: function (sound) {
    return `${sound} `;
  },
  walk: function (animalName) {
    return `The ${animalName} is walking`;
  },
  eat: function (animalName) {
    return `The ${animalName} is eating`;
  },
};
console.log(animal);

let dog = {
  name: "Buddy",
  breed: "Labrador",
  age: 3,
  // canEat: true,
  // canBark: true,
  // bark: function() {
  //   return "Woof! Woof!";
  // },
  // walk: function() {
  //   return `${this.name} is going for a walk.`;
  // },
  eat: function () {
    return `${this.name} is eat only non-veg.`;
  },
};
console.log(dog);

Object.setPrototypeOf(dog, animal);
console.log(dog);
console.log(dog.breed);
console.log(dog.canEat);
console.log(dog.eat(dog.name));
console.log(dog.walk(dog.name));
console.log(dog.sound("woof! woof!"));

let obj1 = Object.create(null);
console.log(obj1);
// let obj2 = Object.create(undefined);
// console.log(obj2);
let obj3 = Object.create(dog);
console.log(obj3);
obj3.name = "bundy";
Object.setPrototypeOf(obj3, Object.prototype);
console.log(obj3);
Object.setPrototypeOf(obj3, Object);
console.log(obj3);

console.log(obj3);

Object.freeze(obj3);
console.log(Object.getOwnPropertyDescriptors(obj3));

Object.seal(obj3);
console.log(Object.getOwnPropertyDescriptors(obj3));

console.log(Object.values(dog));
console.log(Object.keys(dog));
console.log(Object.entries(dog));
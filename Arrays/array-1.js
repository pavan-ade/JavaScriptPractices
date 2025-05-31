"use strict"

let emptyArray = [];
console.log(emptyArray);

let fds = ["Bramaiah","Ashish","Bhanu","sai","Avinash","Nikhil"];
console.log(fds);
console.log(typeof fds);
console.log(fds.length);
console.log(fds[fds.length-1]);

// fds.name = "Pavan";  // not recomanded way
// console.log(fds.name);

console.log(fds.at(0));
console.log(fds.at(-1));
console.log(fds.at(-2));

// let fruits = Array.of("Banana","Mango","Orange");
// console.log(fruits);
// console.log(fruits.length);
// fruits.push("Apple");
// console.log(fruits);
// console.log(fruits.length);

let fruits = ["Banana","Mango","Orange"];
console.log(fruits);
console.log(fruits.push("Apple"));
console.log(fruits);
console.log(fruits.pop("Apple"));
console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);
console.log(fruits.unshift("Apple"));
console.log(fruits);

console.log(fruits.sort());
console.log(fruits.reverse());
console.log("for Each method")
fruits.forEach(element => {
    console.log(element);
});




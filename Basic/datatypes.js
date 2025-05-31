console.log("practices on DataTypes");
/*
here we have multipe datatype in js 
 1) String
 2) Number
 3) BigInt
 4) undefined
 5) null
 6) Boolean
 7) Symbol
 8) Object 

*/

// String 
let name = "Pavan";  // "",'',`` these are define the string
console.log(name);
console.log(typeof name)
console.log(typeof(name))

let name1 = new String("Pavan");  // here it is not a String it is Object which hold the String values is Arryas
console.log(name1);
console.log(typeof(name1))
console.log(name1.length) // give the length of the String/Array
console.log(name1.at(3)) // give the at the position of the String/Array

let fullName = 'Pavana ade';
console.log(fullName);
let job = "AEM Developer";

let description = `
i am ${fullName},
i am working as a ${job} 
`;
console.log(typeof description);

// Number
// let number = "10";
// console.log(typeof +number)
let num = 20;
// console.log(typeof(num,number));
let sal = 20.4;
console.log(sal);

//BigNumber  here bigint also a number but limitation with number so Bigint have more capability then number 
let phornNumber = 123233434n;

console.log(`Number Max values is ${Number.MAX_VALUE}`)
console.log(`Number Max safe value is ${Number.MAX_SAFE_INTEGER}`)
console.log(`BitInt Max safe value is ${BigInt.MAX_VALUE}`) // undefined
console.log(`BitInt Max safe value is ${phornNumber.MAX_SAFE_INTEGER}`) //undefined

//undefined this provide the js engine when valus is not avalable

let test
console.log(`default values of the variables ${test}`)
console.log(`type of the test ${typeof test}`)
console.log(` type of the undefined ${typeof(undefined)} `)

// null when we need make one values to empty or nothing we use null -> just like undefined 
console.log(` type of the null ${typeof null}`)
 console.log(null)

// symbol 
console.log(typeof Symbol)

// prompt("hello");
// alert("Hello");
// alert("Hello World");
console.log("Hello World");
console.log(window)
console.log(localStorage)
console.log(localStorage.setItem("Name","Pavan ade"))
console.log(localStorage.getItem("Name"))
console.log(localStorage.key("Name"))
console.log(localStorage.clear)

// Variables 
let num = 10;
console.log(num)
num = 20;
console.log(num)
var num2 = 30;
console.log(num2)
var num2 = 40;
console.log(num2)
// var num = 10;
// console.log(num)
const clg = "Brig";
console.log(clg)
// clg = "knr"
// console.log(clg)

console.log("Name of the Student "+name)
var name= "Pavan Ade"   // here let should not be work , it did not allowed the variable hosting

let sum = ( a, b) =>{
    return a+b;
};

console.log(sum(10,3))
for(let i =0; i<5; i++){
    console.log(i)
}
// console.log(i)

for(var j =0; j<5; j++){
    console.log(j)
}
console.log(j);

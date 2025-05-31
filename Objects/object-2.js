let num1 = 10;
let num3 = num1; // here coping values
console.log(num1); // 10
console.log(num3); //10
console.log(num1 === num3);
 num1 =20;
console.log(num1); // 20
console.log(num3); // 10

let obj1 = {
    name : "pavan",
    sal : 30,
}
let obj2 = {
    name : "pavan",
    age : 12,
    role : "jr developer"
}
console.log(obj1);
console.log(obj2);
 
console.log(num1 === num3); // here type and values are same 
console.log(obj1 === obj2); // both store in diffirent location
console.log(obj1.name === obj2.name); // here values is same but object diffirent

let obj3 = obj1;
console.log(obj1 === obj3); // here not coping the values it is coping the referent of the obj1

obj1.name = "sai";
console.log(obj1 === obj3); // tha's resoan till it is returing true

// here we can coping the Object as a values by using the object.assign() and spread operator
let emptyObj = {
    sal : 20,
};
console.log(emptyObj);
Object.assign(emptyObj, obj1,obj2);
console.log(emptyObj);
emptyObj.age = 24;
console.log(emptyObj);

let spreadOpt = { ...obj1, ...obj2};
console.log(spreadOpt);
spreadOpt.age = 24;
console.log(spreadOpt);



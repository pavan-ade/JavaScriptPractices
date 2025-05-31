class Student {

    constructor(firstName,lastName,phonoNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phonoNumber = phonoNumber;
    }

    testing(){
        console.log(`Hello ${this.firstName} + ${this.lastName}`);
        console.log(`this is you contact Number : ${this.phonoNumber}`);
    }

};

let pavan = new Student("Pavan","ade",123);
console.log(pavan);
console.log(JSON.stringify(pavan));
pavan.testing();
console.log(new Student("Pavan","ade",123));
console.log(new Student());

let praveen = {};
console.log(praveen);

let bramaiah = {
    "firtsName" : "Bramaiah",
    "lastName" : "M",
    "phoneNumber" : 2343443,
    "testing" : function(){
        console.log("yeah it is working");
    },
    "details" : function(){
        console.log(`first name : ${this.firtsName}
            last name : ${this.lastName}
            phone Number : ${this.phoneNumber}`);
    },
}
bramaiah.testing()
bramaiah.details();

// Task 
let patient = {
    height : 162,
    weight : 62,
    "full Name" : "k pramila"
};
 console.log(patient);
 console.log(patient["full Name"]);

 let funObject = {
    1 : "pavan",
    2 : undefined,
    3 : "Shivaya Vishnu Rupaya:",
    4 : "swami ganesha",
    null : 'emi ledhu',
    undefined : "urike",
    true : `hoppu`,
    false : 'thappu',
    for : "hi",
    50 : "fifty fifty",
 }
 console.log(funObject)
 console.log(funObject.hasOwnProperty());
 console.log(funObject.propertyIsEnumerable());
//  console.log(funObject.__defineGetter__());
//  console.log(funObject.get __proto__());

let name = "pavan";
let age = 24;
let role = "captain"

let player = {
    name,
    playerAge  : age,
    role,
    play (){
        console.log(`${this.name} is playing as a ${this.role}`)
    }
}
console.log(JSON.stringify(player));
console.log(player);
JSON.stringify(player.play());

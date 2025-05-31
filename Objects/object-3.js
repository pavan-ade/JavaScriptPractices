"use strict";

let dhoni = {
  name: "Mahendra Singh Dhoni",
  age: 42,
  isCaptain: true,
  teams: ["India", "csk"],
  statistics: {
    matches: 538,
    runs: 17266,
    centuries: 16,
  },
  retire: function () {
    console.log(`${this.name} retired from international cricket in 2020`);
  },
};
console.log(dhoni);
console.log(Object.keys(dhoni));
console.log(Object.values(dhoni));

console.log(Object.getOwnPropertyDescriptor(dhoni, "name"));
console.log(Object.getOwnPropertyDescriptors(dhoni));

console.log(Object.getPrototypeOf("name"));
console.log("Object " , Object.defineProperty(dhoni, "name",{
    writable : false,
}));
console.log(Object.getOwnPropertyDescriptor(dhoni, "name"));
// dhoni.name = "Pavan Ade";
console.log(dhoni.name);


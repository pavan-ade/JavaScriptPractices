// Task 1
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
console.log(JSON.stringify(dhoni));
console.log(dhoni);
dhoni.retire();

// Task 2

let calculator = {
  add: function (num1, num2) {
    return num1+num2;
  },
  sub: function (num1, num2) {
    return num1-num2;
  },
  multi: function (num1, num2) {
    return num1*num2;
  },
  div : function (num1, num2) {
    return num1/num2;
  },
};
console.log(calculator.add(10,20));
console.log(calculator.sub(10,20));
console.log(calculator.multi(10,20));
console.log(calculator.div(10,20));


// Task 3

let library = {
    name : "Pavan Library",
    books : [],
    totalBooks : 0,
    addBook (bookName){
        this.books.push(bookName);
        this.totalBooks++;
    },
}

library.addBook("Python");
library.addBook("Java");
library.addBook("JavaScript");
library.addBook("C/C++");

console.log(library);
console.log(library.books);
console.log(library.totalBooks);
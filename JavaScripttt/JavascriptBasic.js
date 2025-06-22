//Project 1: Personal Info Object
//Create an object with your personal information (name, age, email, hobbies)
//Practice assessing properties and displaying them with template literals

const john = {
  name: "John Doe",
  age: 50,
  is_married: false,
  email: "johndoe@gmail.com",
  hobbies: ["coding", "music", "movies"],
};

// console.log(john.name);
// console.log(john["age"]);
// console.log(john.hobbies[1]);

//project 2: Simple calculator
//Build functions for basic arithmetic operations
//Practice function declarations and conditional statements

function calculator(operation, ...theArgs) {
  if (operation === "add") {
    return theArgs.reduce((total, current) => total + current);
  } else if (operation === "subtract") {
    return theArgs.reduce((total, current) => {
      return total - current;
    });
  } else if (operation === "multiply") {
    return theArgs.reduce((total, current) => {
      return total * current;
    });
  } else if (operation === "divide") {
    return theArgs.reduce((total, current) => {
      return total / current;
    });
  }
}

console.log(calculator("add", 10, 3, 2));
console.log(calculator("subtract", 10, 3, 2));
console.log(calculator("add", 10));
console.log(calculator("subtract", 10));
console.log(calculator("multiply", 3, 3, 3));
console.log(calculator("divide", 27, 3, 3));

// function add(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// console.log(add(5, 6));
// console.log(substract(175, 55));
// console.log(multiply(22, 34));
// console.log(divide(777, 7));

//Daily tests:
//declare variables and understand the difference between let, const, var?
//these all let us declare variables
//

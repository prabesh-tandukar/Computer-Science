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

// console.log(calculator("add", 10, 3, 2));
// console.log(calculator("subtract", 10, 3, 2));
// console.log(calculator("add", 10));
// console.log(calculator("subtract", 10));
// console.log(calculator("multiply", 3, 3, 3));
// console.log(calculator("divide", 27, 3, 3));

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
//let: declare a vaiable which can be reassigned later, it is block scoped meaning the variable will be only available to the block where it is declared.
//const: declare a variable which is constant meaning its value cannot be altered once it has been set or declared at the moment of initialization
//var: var is a old style of declaring variable which still works but has a problem of hoisting meaning variables declared with var are not block scope its function scoped or globalscoped, so a variable declared with var is available before it is declared or initialized but if called before hand it gives undefined value which is variable hoisting

//create objects and arrays
// let randomObj = {
//   sampleKey1: "sampleValue1",
//   sampleKey2: "sampleValue2",
//   sampleKey3: true,
//   sampleKey4: 55,
//   sampleKey5: ["arrays", "yo", false, "hahaha"],
// };

// console.log(randomObj.sampleKey1);
// console.log(randomObj.sampleKey5[0]);

//write basic functions

// let func = function () {
//   return 5;
// };

// console.log(func());

///////////////////////
//fucntion

const createPet = function (name) {
  let sex;

  const pet = {
    //setName(newName) is equivalent to setName: function (newName) in this context
    setName(newname) {
      name = newname;
    },
    getName() {
      return name;
    },
    getSex() {
      return sex;
    },
    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName());

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); //male
console.log(pet.getName()); //oliver

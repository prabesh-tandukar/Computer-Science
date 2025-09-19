// console.log("hello");
//Console is an object given by web api and log is a method from the console object.
//there are methods with console
// console.error("This is an error");
// console.warn("Gives a warning");

//Variables:

//var, let, const
// we do not use var anymore because it is global scoped
// we use let and const in modern JS because they are block level scope
// with let we can reassign value where are const variables are constant and cannot be reassigned

// let age = 40;
// age = 44;

// console.log(age);

// const name = "Ram";

//Always use const unless you know you will reassign the value then use let.

//Datatypes:

//Primitive datatypes:

//Strings, Numbers, Boolean, null, undefined, Symbol

// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; //will be undefined

// console.log(
//   typeof name,
//   typeof age,
//   typeof rating,
//   typeof isCool,
//   typeof x,
//   typeof y
// );

// //Concatenation
// console.log("My name is " + name + " and i am " + age);
// //Template string
// console.log(`My name is ${name} and i am ${age}`);

// //String properties and methods
// const s = "Hello world";

// console.log(s.length); // property that gives the length of the string
// console.log(s.toUpperCase()); //method that turns all the string to uppercase
// console.log(s.toLowerCase()); //method that turns all the string to lowercase
// console.log(s.substring(0, 5).toUpperCase()); // method that cuts the string within the given indexes here start at 0 index until and not including the 5th index.
// console.log(s.split(""));

// const a = "technology, computers, it, code";
// const arr = a.split(", ");
// console.log(arr);

//Arrays

//Arrays are variables that hold multiple values

//Multiple ways to construct arrays

//1. Array constructure
// const number = new Array(1, 2, 3, 4, 5);
// console.log(number);

//2. Bracket
// const fruits = ["apples", "oranges", "pears"];
// console.log(fruits);

// console.log(fruits[1]);
// fruits[3] = "grapes";
// console.log(fruits);
// fruits.push("mangoes");
// console.log(fruits);
// fruits.unshift("strawberries");
// console.log(fruits);
// const last = fruits.pop();
// console.log(last);

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf("oranges"));

//Object literals

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person; //pulling the values out of the person object (destructuring)

// console.log(firstName, lastName, city);

// person.email = "john@email.com";

// console.log(person);

//Arrays of objects

// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Dentist appointment",
//     isCompleted: false,
//   },
// ];

// console.log(todos[1].text);

//JSON is data format which is used by api's to send and receive information. it is similar to object literals

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//Loops

//For loop

// for (let i = 0; i < 10; i++) {
//   console.log(`For loop number: ${i}`);
// }

// //while loop
// let i = 0;
// while (i < 10) {
//   console.log(`While loop number: ${i}`);
//   i++;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.id);
// }

//High order array methods
//forEach, map, filter

//forEach

// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

//map: returns an array
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
// console.log(todoText);

//filter
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoText);
// console.log(todoCompleted);

//Conditionals

// const x = 6;
// const y = 12;

// if (x > 5 && y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

//ternary operator

// const x = 13;

// const color = x > 10 ? "red" : "blue";
// console.log(color);

// //switch

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
//     break;
// }

//Functions:

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// console.log(addNums(5, 6));

// const subNum = (num1 = 2, num2 = 1) => num1 - num2;
// console.log(subNum(7, 5));

//Object oriented programming ES5

//Constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// //Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1888");
// const person2 = new Person("Mary", "Doe", "4-5-1858");

// console.log(person1.dob);
// console.log(person1.getBirthYear());
// console.log(person2.getFullName());
// console.log(person1);

//ES6 OOP

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// //Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1888");
// const person2 = new Person("Mary", "Doe", "4-5-1858");

// console.log(person2.getFullName);
// console.log(person1);

//DOM

//In the browser we have window object, and it is the most top level object in the browser(window)
//Document is also inside the window object and we use document to select elements in the browsers
// console.log(window);

//Single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
//query selector is a single element selector so even if we have multiple element with the same name it will select the first occuring element

//MUltiple element
// console.log(document.querySelectorAll(".item"));
//query selector all is used to select multiple elements and returns the node list of the selected element, node list is very similar to an array and we can also run array methods in the node list.
//it is recommended to use querySelectorAll everytime it is needed to select multiple element
//but we will look into other older selectors as well
// console.log(document.getElementsByClassName("item"));
//getElementsByClassName returns an HTML Collection which is not like node list or array so if we want to use any array methods we need to convert it manually first
// console.log(document.getElementsByTagName("li"));
//returns html collection from the tag name

//So mostly we use querySelector and querySelectorAll to select elements from the dom

//Looping through element
// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

//Manipulating and changing element in DOM

// const ul = document.querySelector(".items");

//remove element
// ul.remove();

//remove last child element of the parent element
// ul.lastElementChild.remove();

//remove first child element
// ul.firstElementChild.remove();

//Selected the first child element of the parent element and changed the text content
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
//with innerHTML we can dynamically insert HTML
// ul.lastElementChild.innerHTML = "<h1>Yooo</h1>";

// console.log(ul.firstElementChild.textContent);
// console.log(ul.firstElementChild.innerText);

// HTML: <div id="test">Visible <span style="display:none">Hidden</span> Text</div>
// const element = document.getElementById("test");

// console.log(element.textContent); // "Visible Hidden Text"
// console.log(element.innerText); // "Visible Text"

//The Main Differences between textContent and innerText are:

//textContent:
//Gets/sets all text content, including from hidden elements
//Includes text from <script> and <style> tags
//Ignores styling completely
//Faster performance (no layout calculation)
//Standard DOM property

//innerText:
//Respects CSS styling and visibility
//Exlcudees text from hidden elements (display:none, visiblity: hidden)
//Excludes text from <script> and <style> tags
//Can trigger reflow/repain (slower)
//Considers line breaks and formatting

//When to use textContent:
//You need all text content regardless of styling
//Performance is critical
//YOu're working with data extraction/scraping
//YOu want to include hidden content

//When to use innerText:
//You want text as users would see it
//You need to respect element visibility
//You're working with user-facing content
//You want more natural formatting

//Changin styles
// const btn = document.querySelector(".btn");
// btn.style.background = "red";

//Event listener

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (event) => {
//   event.preventDefault(); //this prevents the submit button to submit the form to the file which is its default behaviour
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
// });

//other different events, mouseHover, mouseOut

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}

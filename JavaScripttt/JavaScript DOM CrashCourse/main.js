//DOCUMENT OBJECT MODEL

// Tree of nodes/elements created by the browser

// Javascript can be used to read/write/manipulate to the DOM

// Object Oriented Representation

//Examine the document Object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = "what";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// console.log(document.all[12].textContent);
// // document.all[12].textContent = "New Items";

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Selectors

//getElementById
// console.log(document.getElementById("header-title").innerText);
// let headerTitle = document.getElementById("header-title");
// let header = document.querySelector("#main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "GoodBye";
// headerTitle.innerHTML = "<h3>Hellooo</h3>";

// header.style.borderBottom = "solid 3px #000";

//getElementsByClassName

// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[2].textContent = "Yoyoyo;y";
// items[2].style.fontWeight = "bold";
// items[3].style.backgroundColor = "green";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

//getElementsByTagName

// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[2].textContent = "Yoyoyo;y";
// li[2].style.fontWeight = "bold";
// li[3].style.backgroundColor = "green";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//QuerySelector
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #000";

// const input = document.querySelector("input");
// input.value = "Enter an item";

// const submit = document.querySelector('input[type="submit"]');
// console.log(submit.value);
// submit.value = "Save";

// var item = document.querySelector(".list-group-item");
// item.style.color = "blue";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "pink";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

//querySelectorAll

// const titles = document.querySelectorAll(".title");
// console.log(titles);

// titles.forEach((title) => {
//   title.textContent = "yep";
// });

// const odd = document.querySelectorAll("li:nth-child(odd)");
// odd.forEach((item) => {
//   item.style.backgroundColor = "#f4f4f4";
// });

// const even = document.querySelectorAll("li:nth-child(even)");
// for (let i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "#8e1111ff";
// }

//TRAVERSING THE DOM

// let itemList = document.querySelector("#items");

//parenNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

//ChildNodes
// console.log(itemList.childNodes);

//childNodes will count the line break as child as well and give it as text in the node list

//Children
// console.log(itemList.children);
//children wont count the line breaks and will only give the actual elements but it gives as an HTMLCollection not as node list like childNodes

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "brown";

//FirstChild

//element.firstChild counts the line breaks as element as well so this code below will give a text element which represents the line break
// console.log(itemList.firstChild);

//FirstElementChild
// console.log(itemList.firstElementChild);
//This will give the actual first element child not the line break
// itemList.firstElementChild.textContent = "Change";

//LastChild
// console.log(itemList.lastChild);
//Similar to firstchild but gives the last child node

//LastElementChild
// console.log(itemList.lastElementChild);
//SImilar to firstElementChild but gives the last element child

//Siblings

//nextSiblings
// console.log(itemList.nextSibling);
// console.log(itemList.firstElementChild.nextSibling);
//Gives the next sibling in the same level, also counts the line breaks as node

//nextElementSiblings
// console.log(itemList.firstElementChild.nextElementSibling);
//gives the next element sibling

//previousSiblings
// console.log(itemList.lastElementChild.previousSibling);

//previousElementSiblings
// console.log(itemList.lastElementChild.previousElementSibling);

// CreateElement

// Create a div

// let newDiv = document.createElement("div");

// Add Class
// newDiv.className = "hello";

// Add id
// newDiv.id = "hello1";

// Add attr
// newDiv.setAttribute("title", "Hello Div");

// Create text node
// var newDivText = document.createTextNode("Hello World");

// Add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// console.log(container);

/////////////////////////////////

// Events

// const button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "aquamarine";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);

//type of event
//   console.log(e.type);

// mouse position

//mouse position from the browser window
// console.log(e.clientX);
//   console.log(e.clientY);

//mouse position from the element
//   console.log(e.offsetX);
//   console.log(e.offsetY);

//Checking if you are holding any key while the mouse click
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

const button = document.getElementById("button");
const box = document.getElementById("box");
let output = document.querySelector("#id");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

//Mouseenter and mouseover AND mouseleave and mouseout almost do similar things enter and over fires the event when the mouse enters or is over the element and mouse leave and mouse out fires the event when the mouse is out or leaves the element.
// But the key difference between then is mouseenter fires the event when it enters the said element which is suppose to fire the event and does not care for any other inner child element but mouseover fires every time the mouse run overs even the inner child
// Same goes for mouseout as well it will fire every time the mouse is out from any inner child as well as the main element which is suppose to fire the event

//mouse move
// box.addEventListener("mousemove", runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");
let select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();

  console.log("EVENT TYPE : " + e.type);

  // console.log(e.target.value);
  // document.getElementById("output").innerHTML = `<h3> ${e.target.value} </h3>`;

  //   output.innerHTML =
  //     "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + "</h3>";
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
}

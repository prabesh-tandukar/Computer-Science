let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
// let deleteBtn = document.querySelector(".delete");
let filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);

// Delete Event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  const newItem = document.getElementById("item").value;

  //Create new li element
  const li = document.createElement("li");

  // Add Class
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete button
  const button = document.createElement("button");

  // Button class
  button.className = "btn btn-danger btn-sm float-right delete";

  // button text node
  btnText = document.createTextNode("X");

  button.appendChild(btnText);

  li.appendChild(button);
  itemList.appendChild(li);
}

//Remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter items
function filterItems(e) {
  // Convert text to lowercase
  const text = e.target.value.toLowerCase();
  // Get li
  const items = itemList.getElementsByTagName("li");

  // Conver to an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

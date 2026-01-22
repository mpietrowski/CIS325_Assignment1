/* This file is linked to my index.html and dynamic.html */

 // Items added for Assignment 2
document.getElementById("addItemBtn").addEventListener("click", function () {
 
  // Gets the input field and list
    const input = document.getElementById("itemInput");
  const list = document.getElementById("myList");

  // This will add an item only if the input is not empty
  if (input.value !== "") {

  // Creates a new list item
    const listItem = document.createElement("li");
    listItem.textContent = input.value;

  // Adds the item to the list
    list.appendChild(listItem);

  //This will clear the input field after adding   
    input.value = "";
  }
});

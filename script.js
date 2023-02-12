'use strict';

// Check the To Do List elements and save an array
const todoList = localStorage.getItem('.todo') ? JSON.parse(localStorage.getItem('.todo')) : [];
// To Do button
document.querySelector('.button').addEventListener('click', () => {
    const item = document.querySelector('.todo');
    addElement(item);
})
// Add item to To Do List
function addElement(item){
    // Check an empty string
    if(item.value != ''){
        todoList.push(item.value);
        localStorage.setItem('.todo', JSON.stringify(todoList));
        // Reload the current document
        location.reload();
    } else {
        alert("No added any to do!");
    }
    
}
// Remove item from To Do List
function removeElement(){
    let deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach((db, i) => {
        db.addEventListener('click', () => {
            deleteItem(i);
        })
    })
}
// Give an index for each elements
function deleteItem(i){
    todoList.splice(i,1);
    localStorage.setItem(".todo", JSON.stringify(todoList));
    // Reload the current document
    location.reload();
}

function displayElement(){
    let items = '';
    // Create the html text to the item
    for(let i = 0; i < todoList.length; i++){
        items += `
                <li class="flex-column-row">
                    <p class="flex-item">${todoList[i]}</p>
                    <p class="delete" id="delete">X</p>
                </li>
                `;
    }
    // Item added to the list
    document.querySelector('.flex-column').innerHTML = items;
    // Calling the remove button here
    removeElement();
}
// Page loaded at the background
window.onload = function (){
    displayElement();
}





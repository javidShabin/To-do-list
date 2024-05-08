const addBtn = document.getElementById("add-btn");
let itemList = document.querySelector(".todo-items-list");
let itemInput = document.getElementById("todo-input");

addBtn.addEventListener("click", () => {
    let inputValue = itemInput.value;

    if (!inputValue) {
        // If not have any value in the input box
        alert("Oops!, Enter any activity");
    }else {
        // If have any value in the input box
        // Create a list and add inputValue
        let list = document.createElement("li");
        list.innerHTML = inputValue;
        
        // Create a trash button
        let trash = document.createElement("i");
        trash.classList.add("fas", "fa-trash");
        
        // Create a edit button
        let edit = document.createElement("i");
        edit.classList.add("fas", "fa-edit");

        // Append items
        list.append(trash, edit);
        itemList.appendChild(list)

    }
})
itemList.addEventListener("click", (event) => {
    let position = event.target;
    if (position.classList.contains("fa-trash")) {
        let item = position.parentElement;
        item.remove()
    }
})
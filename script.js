const addBtn = document.getElementById("add-btn");
let itemList = document.querySelector(".todo-items-list");
let itemInput = document.getElementById("todo-input");

// The variable called globaly
let inputValue = itemInput.value;

// Activity array
let activityArray = [];

const setLocalStorage = () => {
    // Set local to storage
    localStorage.setItem("activity", JSON.stringify(activityArray));
}

const getLocalStorage = () => {
    // Get item from local storage
    // If have any value in the input
    if (localStorage.getItem("activity")) {
        activityArray = JSON.parse(localStorage.getItem("activity"));
        buildUl();
        console.log("Data found");
    }else {
        console.log("No data found");
    }
}

const buildUl = () => {
    itemList.textContent = "";
    activityArray.forEach((activities) => {
        // If have any value in the input box
        // Create a list and add inputValue
        let list = document.createElement("li");
        list.style.cssText = "animation-name: slideIn"
        let span = document.createElement("span");
        span.innerHTML = activities;
        itemInput.value = "";
        itemInput.focus();
        // Create a trash button
        let trash = document.createElement("i");
        trash.classList.add("fas", "fa-trash");
    
        // Create a edit button
        let edit = document.createElement("i");
        edit.classList.add("fas", "fa-edit");
        // Append items
        list.append( span, trash, edit);
        itemList.appendChild(list);
    })
}

// Add you activity
addBtn.addEventListener("click", () => {
    inputValue = itemInput.value;

    if (!inputValue) {
        // If not have any value in the input box
        alert("Oops!, Enter any activity");
    }else {
        activityArray.push(inputValue)
        console.log(activityArray);
        // Set items to local stoorage
        setLocalStorage();

        // Get itmes from local storage
        getLocalStorage();

    }
})

// Remove items fuction
itemList.addEventListener("click", (event) => {
    let position = event.target;
    if (position.classList.contains("fa-trash")) {
        let item = position.parentElement;
        item.classList.add("slideOut")
        // Delete aniation
        item.addEventListener("transitionend", () => {
            item.remove();
        })
    }
})

itemList.addEventListener("click", (event) => {
    let position = event.target;
    if (position.classList.contains("fa-edit")) {
        let editValue = prompt("Enet new value");
        let item = position.parentElement;
        let span = document.querySelector("span");
        span.innerHTML = editValue;
    }
})


getLocalStorage();
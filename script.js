const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

//Function to add task// 
function addTask() { 
    if (inputBox.value === "") { 
        alert("Please add a task!"); 
    } else { 
        let li = document.createElement("li"); //create HTML element with tag name "li", and store "li" in variable "li"
        li.innerHTML = inputBox.value; // text input in "li" element is added into inputBox.value
        listContainer.appendChild(li); // li is then displayed in the "list-container" id in HTML (make it its child??)
        
        // to add cross icon (delete task button) // 
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = ""; //to make it empty once task is added 
    saveData(); // function will be called when new task added (addTask Function)
}

// deleted task function// 

listContainer.addEventListener("click", function(e){ // when we press on click
    if (e.target.tagName === "LI") { // if click target element is "LI", then it will add check class name , if class list present, it will remove (toggle) 
        e.target.classList.toggle("checked"); 
        saveData(); 

    } else if (e.target.tagName === "SPAN") { // if click target element is "SPAN", it will delete parent element 
        e.target.parentElement.remove(); 
        saveData(); 
    } 
}, false); 

// store task in browser so wont disappear when refreshed 

function saveData() { 
    localStorage.setItem("data", listContainer.innerHTML); // whatever listed in listContainer will be stored under name "data"
}

// display data whenever we open browser again 
function showTask() { 
    listContainer.innerHTML = localStorage.getItem("data"); 
}

showTask(); 
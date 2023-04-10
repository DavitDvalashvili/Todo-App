const theme = document.getElementById("theme-switch");
const crosses = document.querySelectorAll(".cross");
const check = document.querySelectorAll(".task div img");
const clearButton = document.querySelector(".clear");
const tasks = document.querySelectorAll(".task");
const filterButtons = document.querySelectorAll(".actions span");
const input = document.getElementById("input-task");
const submit = document.querySelector(".submit");
const tasks_box = document.querySelector(".tasks-box");



function manageTasks() {
    removeTask();
    clearCompleted();
    addTask();

}

manageTasks()

function addTask() {
    submit.addEventListener("click", () => {
        if(input.value !== ""){
            //add new task in the task container
            const newTask = document.createElement("div");
            newTask.classList.add("task");
            tasks_box.appendChild(newTask);
            tasks_box.insertBefore(newTask, tasks_box.firstChild);
            //add check icon in the task
            const new_div = document.createElement("div");
            newTask.appendChild(new_div);
            let new_check = document.createElement("img");
            new_div.appendChild(new_check);
            new_check.src = "./images/icon-check.svg";
            new_check.alt = "check-icon"
            //add p element in the new task
            const new_task_text = document.createElement("p");
            new_task_text.innerText = input.value;
            new_task_text.classList.add("task-text");
            newTask.appendChild(new_task_text);
            //add cross image in the task
            const new_cross = document.createElement("img");
            new_cross.classList.add("cross");
            new_cross.src = "./images/icon-cross.svg";
            new_cross.alt = "cross";
            newTask.append(new_cross);
            //clears the input
            input.value = "";
        }

    })
}







//filters tasks
filterButtons.forEach(filterButton => {
    filterButton.addEventListener("click", (event) => {
        //removes blue color of all elements;
        document.querySelector(".all").classList.remove("active-filter");
        document.querySelector(".active").classList.remove("active-filter");
        document.querySelector(".completed").classList.remove("active-filter");

        if(event.target.classList.contains("all")) {
            displayAll();
        } else if(event.target.classList.contains("active")) {
            displayActive();
        } else if(event.target.classList.contains("completed")) {
            displayCompleted();
        }
        //add blue color of target element;
        event.target.classList.add("active-filter");
    })
})

//displays all tasks on the screen
function displayAll() {
    tasks.forEach(task => {
        task.style.display = "flex"
    })
} 

//displays active tasks on the screen
function displayActive() {
    tasks.forEach(task => {
        if(task.classList.contains("completed")){
            task.style.display = "none"
        } else if(!task.classList.contains("completed")){
            task.style.display = "flex"
        }
    })
}

//displays completed tasks on the screen
function displayCompleted() {
    tasks.forEach(task => {
        if(!task.classList.contains("completed")){
            task.style.display = "none"
        } else if(task.classList.contains("completed")) {
            task.style.display = "flex"
        }
    })
}


//remove completed tasks
function clearCompleted(){
    clearButton.addEventListener("click", () => {
        tasks.forEach(task => {
            if(task.classList.contains("completed")){
               task.remove();
            }
        })
    })
}



//check completed tasks
check.forEach(checkIcon => {
    checkIcon.addEventListener("click", (event) => {
        //console.log(event.target);
        const greatParent = event.target.parentNode.parentNode;
        greatParent.classList.toggle("completed")
    })
})




//remove completed tasks
function removeTask() {
    crosses.forEach(cross => {
        cross.addEventListener("click", (event) => {
            let parentElement = event.target.parentNode;
            if(parentElement.classList.contains("completed")) {
                parentElement.remove();
            }
        })
    })
}




//changes theme dark to light and vice versa
let active_theme = "light";
theme.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");
    if(active_theme == "light"){
        theme.src="./images/icon-moon.svg"
        active_theme = "dark"
    } else {
        theme.src="./images/icon-sun.svg"
        active_theme = "light"
    }
})

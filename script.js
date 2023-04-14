//changes theme dark to light and vice versa
const theme = document.getElementById("theme-switch");
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


const input = document.getElementById("input-task");
const submit = document.querySelector(".submit");
function manageTasks() {
    // add click event listener
    submit.addEventListener("click", () => {
        addTask();
    })
    //add keypress event listener
    document.addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
            addTask();

        }
    })
     
}

manageTasks();


let leftTasks = {left: 0}



const tasks_box = document.querySelector(".tasks-box");
function addTask() {
    if(input.value !== ""){
        //add new task in the task container
        let task = document.createElement("div");
        task.classList.add("task");
        tasks_box.appendChild(task);
        tasks_box.insertBefore(task, tasks_box.firstChild);
        //add check icon in the task
        let div = document.createElement("div");
        task.appendChild(div);
        let check = document.createElement("img");
        div.appendChild(check);
        check.src = "./images/icon-check.svg";
        check.alt = "check-icon"; 
        //add p element in the new task
        let task_text = document.createElement("p");
        task_text.textContent = input.value;
        task_text.classList.add("task-text");
        task.appendChild(task_text);
        //add cross image in the task
        let cross = document.createElement("img");
        cross.classList.add("cross");
        cross.src = "./images/icon-cross.svg";
        cross.alt = "cross";
        task.append(cross);
        //clears the input
        input.value = "";

        //calculates and displays num of left elements
        const left = document.querySelectorAll(".task:not(.completed)");
        leftTasks.left = left.length;
        console.log(leftTasks.left);
        document.querySelector("#task-number").textContent = leftTasks.left;


        // add check_uncheck task function
        let checkTasks = document.querySelectorAll(".task");
        check_uncheck_task(checkTasks);
    }
    //add removeTask function
    let crosses = document.querySelectorAll(".cross");
    removeTask(crosses);

    //add clearTasks function
    let clearButton = document.querySelector(".clear");
    let checkTasks = document.querySelectorAll(".task");
    clearTasks(clearButton, checkTasks);

    //add filter function
    let filterButtons = document.querySelectorAll(".actions span");
    filterButtons.forEach(filterBtn => {
        filterBtn.addEventListener("click", (event) => {
            //remove blue color to the filter button
            filterButtons.forEach(filterBtn => {
                filterBtn.classList.remove("active-filter");
            })
            //displays filtered elements
            if(event.target.classList.contains("all")) {
                displayAll(checkTasks);
            } else if(event.target.classList.contains("active")) {
                displayActive(checkTasks);
            } else if(event.target.classList.contains("completed")) {
                displayCompleted(checkTasks);
            }
            //add blue color to the filter buttons
            event.target.classList.add("active-filter");
        })
    })
}

//function check completed tasks and uncheck them.
function check_uncheck_task(parameter) {
    //loop through tasks
    for(let i=0; i< parameter.length; i++) {
        if(i == 0){
            parameter[i].addEventListener("click", (event) => {
                let parentElement = event.target.parentNode;
                if(event.target.tagName.toLowerCase() === "img") {
                    if(parentElement.parentNode.classList.contains("completed")){
                        parentElement.parentNode.classList.remove("completed");
                        leftTasks.left = leftTasks.left +1;
                    } else {
                        parentElement.parentNode.classList.add("completed");
                        leftTasks.left = leftTasks.left -1;
                    }
                } else if(!event.target.classList.contains("task")) {
                    if(parentElement.classList.contains("completed")){
                        parentElement.classList.remove("completed");
                        leftTasks.left = leftTasks.left +1;
                    } else {
                        parentElement.classList.add("completed");
                        leftTasks.left = leftTasks.left -1;
                    }
                    
                }
                document.querySelector("#task-number").textContent = leftTasks.left;
            })
        } 
    }
}

//remove tasks when click on cross icon
function removeTask(crossElements) {
    crossElements.forEach(cross => {
        cross.addEventListener("click", (event) => {
            let parentElement = event.target.parentNode;
            if(parentElement.classList.contains("completed")) {
                parentElement.remove();
            }
        })
    })
}

//remove all tasks.
function clearTasks(clearBtn, taskElements) {
    clearBtn.addEventListener("click", () => {
        taskElements.forEach(task => {
            if(task.classList.contains("completed")){
                task.remove();
            }
        })
    })
}



//displays all tasks on the screen
function displayAll(taskElements) {
    taskElements.forEach(taskElement => {
        taskElement.style.display = "flex"
    })
} 

//displays completed tasks on the screen
function displayCompleted(taskElements) {
    taskElements.forEach(taskElement => {
        if(!taskElement.classList.contains("completed")){
            taskElement.style.display = "none"
        } else if(taskElement.classList.contains("completed")) {
            taskElement.style.display = "flex"
        }
    })
}

//displays active tasks on the screen
function displayActive(taskElements) {
    taskElements.forEach(taskElement => {
        if(taskElement.classList.contains("completed")){
            taskElement.style.display = "none"
        } else if(!taskElement.classList.contains("completed")){
            taskElement.style.display = "flex"
        }
    })
}


    













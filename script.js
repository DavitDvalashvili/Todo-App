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
    }
    let checkTasks = document.querySelectorAll(".task");
    //console.log(checkTasks);
    for(let i=0; i<checkTasks.length; i++) {
        if(i % 2 ==0){
            checkTasks[i].addEventListener("click", (event) => {
                let parentElement = event.target.parentNode;
                if(event.target.tagName.toLowerCase() === "img") {
                    parentElement.parentNode.classList.toggle("completed")
                } else {
                    parentElement.classList.toggle("completed")
                }
            })
        } else {
            checkTasks[i+1].addEventListener("click", (event) => {
                let parentElement = event.target.parentNode;
                if(event.target.tagName.toLowerCase() === "img") {
                    parentElement.parentNode.classList.toggle("completed")
                } else {
                    parentElement.classList.toggle("completed")
                }
            })
        }

    }
}











const taskInput = document.querySelector(".task-input input"), //The task to be inputed
filters = document.querySelectorAll(".filters span"), //the filter currently chosen
clearAll = document.querySelector(".clear-btn"), //clear all tasks button
tasksBox = document.querySelector(".tasks-box"); // the box with all the tasks

let editId, //the id of task when editing
isEditTask = false, //false until needed to be true
todos = JSON.parse(localStorage.getItem("todo-list"));  //something, if i had to guess saves our tasks in json format

filters.forEach(btn => { //when any of the filters are selected
    btn.addEventListener("click", () => { //when they are clicked 
        document.querySelector("span.active").classList.remove("active"); //finds the span with the active class and removes it from them
        btn.classList.add("active"); //adds the active class to the selected filter
        showTodo(btn.id); //call showTodo
    });
});

function showTodo(filter) { //function showTodo to show taks according to the filter
    let liTag = ""; //variable liTag
    if(todos) { //if there are tasks already in the system.
        todos.forEach((todo, id) => { //for each task that exists, while padding on the task itself and its id
            let done = todo.status == "done" ? "checked" : ""; //see if the task is done or not.
            if(filter == todo.status || filter == "all") { //if the filter is all or todo.status
                //this will just add this to the html file live, you wwont see it in the code but it will take effect.
                //Here is there is a list element, with a label inside for the checking box and the task itself.
                //Then there is a div of settings that has the settings that can be chosen on the side of the task
                //The settings menu is itself a list with 2 elements, edit and delete.
                liTag += `<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${done}>
                                <p class="${done}">${todo.name}</p>
                            </label>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
                                <ul class="task-menu">
                                    <li onclick='editTask(${id}, "${todo.name}")'><i class="fa-solid fa-pen"></i>Edit</li>
                                    <li onclick='deleteTask(${id}, "${filter}")'><i class="fa-solid fa-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </li>`;
            }
        });
    }
    tasksBox.innerHTML = liTag || `<span>You don't have any task here</span>`; //It will the liTag set up there or that you dont have any tasks if no tasks are in the system.
    let checkTask = tasksBox.querySelectorAll(".task");   //The task as defined in the if above
    !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active"); //if the task doesnt have length it will remove active but add it is it has length
    tasksBox.offsetHeight >= 300 ? tasksBox.classList.add("overflow") : tasksBox.classList.remove("overflow"); //set height of the task box to fit the new task
}
showTodo("all"); //show all of the tasks

function showMenu(selectedTask) {  //when the settings icon is hit, it will do this function
    let menuDiv = selectedTask.parentElement.lastElementChild; //menu div variable
    menuDiv.classList.add("show"); //adds the show class to menuDiv
    document.addEventListener("click", e => { //if cliked 
        if(e.target.tagName != "I" || e.target != selectedTask) { //
            menuDiv.classList.remove("show"); //remove the show class from menuDiv if not the correct place  to click
        }
    });
}

function updateStatus(selectedTask) { //update status function
    let taskName = selectedTask.parentElement.lastElementChild; //make taskName the lastElementChild of selectedTask.
    if(selectedTask.checked) { //if the task got done
        taskName.classList.add("checked"); //mark it as checked and add that class
        todos[selectedTask.id].status = "done"; //set status to done
    } else { //else
        taskName.classList.remove("checked"); //remove the checked class
        todos[selectedTask.id].status = "ongoing"; //change it to ongoing status
    }
    localStorage.setItem("todo-list", JSON.stringify(todos)) ; //update todo list appropriately
}

function editTask(taskId, textName) { //edit task function, uses taskID and textName
    editId = taskId; //set editID as taskID 
    isEditTask = true; //make it editable 
    taskInput.value = textName; //set TaskInput to textName
    taskInput.focus(); //focus on taskInput
    taskInput.classList.add("active"); //add active class to taskInput
}

function deleteTask(deleteId, filter) { //delete task function, uses deleteID and filter
    isEditTask = false; //set editable to false
    todos.splice(deleteId, 1); //splice the todos list hence deleting the task with the deleteId needed to be removed
    localStorage.setItem("todo-list", JSON.stringify(todos)); //update the todo list json file
    showTodo(filter); //show the todo list with the filter that was there already
}

clearAll.addEventListener("click", () => { //when clear-btn is clicked
    isEditTask = false; //editable becomes false 
    todos.splice(0, todos.length); //splice everything out
    localStorage.setItem("todo-list", JSON.stringify(todos)); //update the todo list json
    showTodo() //show the empty todo list
});

taskInput.addEventListener("keyup", e => { //when user presses enter it adds task
    let userTask = taskInput.value.trim(); //trim the users input any unneccessary characters
    if(e.key == "Enter" && userTask) { //if the input isnt empty and the key pressed is entet then
        if(!isEditTask) { //if the editable is false then
            todos = !todos ? [] : todos;  //todos are empty or not
            let taskInfo = {name: userTask, status: "ongoing"}; //set task info
            todos.push(taskInfo); //push task info
        } else { //else if the editable is true
            isEditTask = false;  //make it false 
            todos[editId].name = userTask; //stop the editing
        }
        taskInput.value = ""; //make the input back to being empty
        localStorage.setItem("todo-list", JSON.stringify(todos)); //update the todo list json
        showTodo(document.querySelector("span.active").id); //show the todo list with the current filter
    }
});
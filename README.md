# TodoListApp
A simple todo list app to list what you have to do and what is already done.

This app consists of three files:

```
  1. index.html
  2. style.css
  3. script.js
```

## index.html:

This file just sets up how our app will look on our website. 

it is made up of:

1. wrapper, wraps around everything in our app
2. a div classed task-input, it is the div that hold the input field and the icon in it.
3. a controls div. holds the three spans that have the filters
4. a list element ul that will hold our tasks. these tasks will be added as li elements in the scripts.js file.

your html code will look like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo List Application</title> <!--Title for our app-->
  <link rel="stylesheet" href="./style.css"> <!--Link to css file-->
  <script src="https://kit.fontawesome.com/a9bb59d2d6.js" crossorigin="anonymous"></script> <!--Link to fontawesome for icons-->
</head>
<body>
  <section>
    <div class="wrapper"> <!--Wrapper to wrap the whole app.-->
        <div class="task-input"> <!--Where the inputting of tasks will be-->
          <i class="fa-solid fa-bars-staggered"></i> <!--Our Icon-->
          <input type="text" placeholder="Add a Task">
        </div>
        <div class="controls"> <!--Div with the controls options-->
            <div class="filters"> <!--The div with our filters (all, ongoing, done)-->
              <span class="active" id="all">All</span> <!--Filter for all tasks-->
              <span id="ongoing">Ongoing</span> <!--Filter for Ongoing tasks-->
              <span id="done">Done</span> <!--Filter for Done tasks-->
            </div>
            <button class="clear-btn">Clear All Tasks</button>
        </div>
        <ul class="tasks-box"></ul> <!--Box showing all our tasks-->
    </div>
  </section>

  <script src="./script.js"></script> <!--Link to our script,js file for functionality-->
  
</body>
</html>
```

## style.css

This file helps format our page and will end up making it look something like this:
![Screenshot_1](https://user-images.githubusercontent.com/115345791/197991695-577f6c68-5bf4-478a-bf97-c83238e2c434.jpg)


we start by setting our font and overall page settings, i used Roboto but you can use whichever one you like:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
*{ /*styling for the whole page*/
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
```

then we styled our body tag & the ::selection for when the user highlights something:
```css
body{ /*styling for body, in our case the whole page*/
  width: 100%; /*its width*/
  height: 100vh;  /*its height*/
  overflow: hidden; 
  background: linear-gradient(270deg, #4affa7, #fe422d); /*Setting Background Colour*/
}
::selection{ /*when the user highlighs something*/
  color: #fff;
  background: #0a6c1c;
}
```
Then we style the wrapper that hold our app:
```css
.wrapper{ /*The wrapper div element*/
  max-width: 405px; /*Maximum width*/   
  padding: 28px 0 30px; /*Its padding*/
  margin: 137px auto; /*Its margin*/
  background: #fff; /*Background colour*/
  border-radius: 7px; /*Border radius*/
  box-shadow: 0 10px 30px rgba(0,0,0,0.1); /*its shadow*/
}
```
After that we style the div containing our input field:
```css
.task-input{ /*the inputing area*/
  height: 52px;
  padding: 0 25px;
  position: relative;
}
.task-input i{ /*styling for the icon in the input field*/
  top: 50%;
  position: absolute;
  transform: translate(17px, -50%);
}
.task-input input{ /*Styling for the input field itself*/
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  padding: 0 20px 0 53px;
  border: 1px solid #999;
}
.task-input input:focus,
.task-input input.active{ /*styling for the input field itself when it is in focus or active.*/
  padding-left: 52px;
  border: 2px solid #3C87FF;
}
.task-input input::placeholder{ /*styling for the placeholder inside the input field*/
  color: #bfbfbf;
}
```
Then we style the div holding the controls, that includes the filters and clear all button:
```css
.controls, li{ /*styling for the list elements in the controls div*/
  display: flex;
  align-items: center; /*Align items in the center vertically*/
  justify-content: space-between; /* the elements are aligned usually to the left side*/
}
.controls{ /*Padding and Border for the controls div.*/
  padding: 18px 25px;
  border-bottom: 1px solid #ccc;
}
.filters span{ /*Styling for the filters spans*/
  margin: 0 8px;
  font-size: 17px;
  color: #444444;
  cursor: pointer;
}
.filters span:first-child{ /*Styling for the span that is the first-child*/
  margin-left: 0;
}
.filters span.active{ /*Styling for the span with the active class*/
  color: #3C87FF;
}
.controls .clear-btn{ /*Styling for the Clear button that clears all tasks*/
  border: none;
  opacity: 0.6;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  padding: 7px 13px;
  border-radius: 4px;
  letter-spacing: 0.3px;
  pointer-events: none;
  transition: transform 0.25s ease;
  background: linear-gradient(135deg, #1798fb 0%, #2D5CFE 100%);
}
.clear-btn.active{ /*When there are tasks it becomes active and so it changes opacity*/
  opacity: 0.9;
  pointer-events: auto;
}
.clear-btn:active{  /*when it is active it scales*/
  transform: scale(0.93);
}
```
After that the task box that will contain all our tasks is also styled, this includes the tasks themselves, the checkbox, the settings and such:
```css
.tasks-box{ /*the tasks list*/
  margin-top: 20px;
  margin-right: 5px;
  padding: 0 20px 10px 25px;
}
.tasks-box.overflow{ /*the tasks list overflow styling*/
  overflow-y: auto;
  max-height: 300px;
}

.tasks-box::-webkit-scrollbar{ /*style of  the entire scrollbar. */
  width: 5px;
}

.tasks-box::-webkit-scrollbar-track{ /*style of the track (progress bar) of the scrollbar, */
  background: #f1f1f1;
  border-radius: 25px;
}
.tasks-box::-webkit-scrollbar-thumb{ /* style of  the draggable scrolling handle. */
  background: #e6e6e6;
  border-radius: 25px;
}
.tasks-box .task{ /*Styling of the tasks themselves*/
  list-style: none;
  font-size: 17px;
  margin-bottom: 18px;
  padding-bottom: 16px;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
}
.tasks-box .task:last-child{ /*Styling of the last task*/
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 0;
}
.tasks-box .task label{ /*Styling for the task label*/
  display: flex;
  align-items: flex-start;
}
.task label input{ /*Styling for the task label input which is the checkbox*/
  margin-top: 7px;
  accent-color: #3C87FF;
}
.task label p{ /*Styling for the task label's content */
  user-select: none;
  margin-left: 12px;
  word-wrap: break-word;
}
.task label p.checked{    /*Styling for the task label's content if it is checked*/
  text-decoration: line-through;
}
.tasks-box .settings{ /*Styling for the settings part */
  position: relative;
}
.settings :where(i, li){
  cursor: pointer;
}
.settings .task-menu{ /*Styling for the settings' menu */
  z-index: 10;
  right: -5px;
  bottom: -65px;
  padding: 5px 0;
  background: #fff;
  position: absolute;
  border-radius: 4px;
  transform: scale(0);
  transform-origin: top right;
  box-shadow: 0 0 6px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
}
.tasks-box .task:last-child .task-menu{ /*Styling for the settings' menu's last child */
  bottom: 0;
  transform-origin: bottom right;
}
.tasks-box .task:first-child .task-menu{ /*Styling for the settings' menu's first child */
  bottom: -65px;
  transform-origin: top right;
}
.task-menu.show{ /*Styling for the settings' menu's to show if it got the show class, meaning when the user clicks on it. */
  transform: scale(1);
}
.task-menu li{ /*Styling for the menu elements */
  height: 25px;
  font-size: 16px;
  margin-bottom: 2px;
  padding: 17px 15px;
  cursor: pointer;
  justify-content: flex-start;
}
.task-menu li:last-child{ /*Styling for the menu elements  for the last child*/
  margin-bottom: 0;
}
.settings li:hover{  /*Styling for the menu elements  when hovered on*/
  background: #f5f5f5;
}
.settings li i{ /*Styling for the menu elements' icons'*/
  padding-right: 8px;
}

```

## Finally script.js:
This file handles the functionality of this app, the adding, the deleteing and the editing and such.

so we first start by getting a few queries and setting some stuff up.
```js 
const taskInput = document.querySelector(".task-input input"), //The task to be inputed
filters = document.querySelectorAll(".filters span"), //the filter currently chosen
clearAll = document.querySelector(".clear-btn"), //clear all tasks button
tasksBox = document.querySelector(".tasks-box"); // the box with all the tasks

let editId, //the id of task when editing
isEditTask = false, //false until needed to be true
todos = JSON.parse(localStorage.getItem("todo-list"));  //something, if i had to guess saves our tasks in json format
```
To change the filter on click we write up a code that checks if a span is clicked, then if one is clicked it sets it as the active one and shows the tasks related to it:

```js
filters.forEach(btn => { //when any of the filters are selected
    btn.addEventListener("click", () => { //when they are clicked 
        document.querySelector("span.active").classList.remove("active"); //finds the span with the active class and removes it from them
        btn.classList.add("active"); //adds the active class to the selected filter
        showTodo(btn.id); //call showTodo
    });
});
```

Then the function showTodo is created. it is responsible for showing the tasks for each filter.


we then create a variable liTag that will house all our tasks one by one. 

if there exists task then it will start showing the tasks, and for each one that exists it will be added to the liTag.

if there are no tasks, the liTag wont get added and instead the text "You dont have any task here" will be shown.

checkTask check a the task element, if the task doesnt have length it will remove active but add it is it has length.

```js
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
```

the showTodo("all") at the end is there to start the program.

Now we do the showMenu Function: that takes the selectedTask, and shows its settings. it adds the show class to the menuDiv.

```js
function showMenu(selectedTask) {  //when the settings icon is hit, it will do this function
    let menuDiv = selectedTask.parentElement.lastElementChild; //menu div variable
    menuDiv.classList.add("show"); //adds the show class to menuDiv
    document.addEventListener("click", e => { //if cliked 
        if(e.target.tagName != "I" || e.target != selectedTask) { //
            menuDiv.classList.remove("show"); //remove the show class from menuDiv if not the correct place  to click
        }
    });
}
```

Then we do the updateStatus Function, to update the task status of a selectedTask.

it will check if the selectedTask is checked, if it is add the class checked to it and change status to done in the todos.

Else we remove checked and then add the status ongoing to the todos.

```js
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

```

Then the editTask function is created:

it takes the taskID and textName, we will make the task editable, change it and make it active to be able to change it.

```js
function editTask(taskId, textName) { //edit task function, uses taskID and textName
    editId = taskId; //set editID as taskID 
    isEditTask = true; //make it editable 
    taskInput.value = textName; //set TaskInput to textName
    taskInput.focus(); //focus on taskInput
    taskInput.classList.add("active"); //add active class to taskInput
}

```

Then the deletion of the task is done: it takes and id and filter.

make the task undeditable.

then delete it from todos.

then save the JSON file and show the new tasks.

```js
function deleteTask(deleteId, filter) { //delete task function, uses deleteID and filter
    isEditTask = false; //set editable to false
    todos.splice(deleteId, 1); //splice the todos list hence deleting the task with the deleteId needed to be removed
    localStorage.setItem("todo-list", JSON.stringify(todos)); //update the todo list json file
    showTodo(filter); //show the todo list with the filter that was there already
}
```

We add the event listener for clearing all items:
we set tasks to not be editable then we delete everything out and save the JSON. then we show the new task.

```js
clearAll.addEventListener("click", () => { //when clear-btn is clicked
    isEditTask = false; //editable becomes false 
    todos.splice(0, todos.length); //splice everything out
    localStorage.setItem("todo-list", JSON.stringify(todos)); //update the todo list json
    showTodo() //show the empty todo list
});
```

Finally we add the event listener of Keyup for inputing the task:

we take the input of the user and trim it

if the task isnt empty and the key is enter, then if the editing is not available then we check for todos then add the task to it and push it.
else then it leads to editing to become false and change the todos[editID].name = userTask. 

Then after all of that we clear the task input and save the json.

then show the tasks.

```js
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
```

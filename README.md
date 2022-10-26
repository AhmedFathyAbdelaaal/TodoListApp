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

//  Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



//  Load all event listeners

loadEventListeners();

function loadEventListeners() {
    //  DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
        //  Add task Event
    form.addEventListener('submit', addTask);

    //  Remove Task Event

    taskList.addEventListener('click', removeTask);

    //  Clear All Tasks

    clearBtn.addEventListener('click', clearTasks);

    //  Filter Tasks

    filter.addEventListener('keyup', filterTasks)

    //  Add Task

    function addTask(e) {

        //  Check for value

        if (taskInput.value === '') {
            alert('Task Input cannot be blank');
        }

        // console.log(taskInput);

        //  Create List Item

        const listItem = document.createElement('li');

        //  Add Collection Item class to newly created list item

        listItem.className = 'collection-item';

        //  Create Text Node and append to listItem

        listItem.appendChild(document.createTextNode(taskInput.value));

        //  Create new link element

        const link = document.createElement('a');

        //  Add Link class

        link.className = 'delete-item secondary-content';

        //  Add link html

        link.innerHTML = "<i class='fa fa-remove'></i>"

        //  Append Link to listItem

        listItem.appendChild(link);

        //  Append listItem to List

        taskList.appendChild(listItem);

        //  Store in Local Storage
        taskStore(taskInput.value);

        //  Clear Input

        taskInput.value = '';


        e.preventDefault();
    }



    function taskStore(task) {
        //  Set variable for getting an array of tasks
        let Tasks;

        //  if localstorage is empty, create a new array else print the list in JSON
        if (localStorage.getItem('Tasks') === null) {
            Tasks = [];
        } else {
            Tasks = JSON.parse(localStorage.getItem('Tasks'));
        }
        //  Push the values to the array
        Tasks.push(task);

        //  Set Items in localstorage
        localStorage.setItem('Tasks', JSON.stringify(Tasks));

        //  Currently the new array value replaces the existing value, which is not what we want. Therefore, We need to append / update the new values to the exisitng array

        //  Get existing data

        const ifExists = localStorage.getItem('Tasks');

        // If no existing task, use the value by itself. Otherwise, convert the localStorage string to an array

        ifExists = ifExists ? ifExists.split(',') : [];

        // Add new data to localStorage Array

        ifExists.push(task);

        //  Save back to local storage in string format

        localStorage.setItem('Tasks', JSON.stringify(ifExists));

    }

    //  Get Tasks from localstorage

    function getTasks() {
        //  Set variable for getting an array of tasks
        let Tasks;

        //  if localstorage is empty, create a new array else print the list in JSON
        if (localStorage.getItem('Tasks') === null) {
            Tasks = [];
        } else {
            Tasks = JSON.parse(localStorage.getItem('Tasks'));
        }

        //  Loop through the task items

        Tasks.forEach(function(task) {

            //  Create List Item

            const listItem = document.createElement('li');

            //  Add Collection Item class to newly created list item

            listItem.className = 'collection-item';

            //  Create Text Node and append to listItem

            listItem.appendChild(document.createTextNode(task));

            //  Create new link element

            const link = document.createElement('a');

            //  Add Link class

            link.className = 'delete-item secondary-content';

            //  Add link html

            link.innerHTML = "<i class='fa fa-remove'></i>"

            //  Append Link to listItem

            listItem.appendChild(link);

            //  Append listItem to List

            taskList.appendChild(listItem);
        });
    }

    //  Remove Task

    function removeTask(e) {

        //  Target remove icon on task

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are you sure ?')) {
                e.target.parentElement.parentElement.remove();
            }

            //  Remove from Local Storage

            removeTaskLS(e.target.parentElement.parentElement);

        }



        // e.preventDefault();
    }

    //  Remove Tasks from Local storage

    function removeTaskLS(taskItem) {
        //console.log(taskItem); //   Shows the task item class

        //  Set variable for getting an array of tasks
        let Tasks;

        //  if localstorage is empty, create a new array else print the list in JSON
        if (localStorage.getItem('Tasks') === null) {
            Tasks = [];
        } else {
            Tasks = JSON.parse(localStorage.getItem('Tasks'));
        }

        //  Loop through the task items

        Tasks.forEach(function(taskItem, index) {

            // const ifExists = localStorage.getItem('Tasks');

            // If no existing task, use the value by itself. Otherwise, convert the localStorage string to an array

            // ifExists = ifExists ? ifExists.split(',') : [];

            //  Not Working

            //  If the text of the item matches the task we want to delete, note the index of the item, remove it and set the rest of the local storage items
            if (taskItem.textContent === task) {
                Tasks.splice(index, 1);
                //localStorage.removeItem(index);
            }
        });

        localStorage.setItem('Tasks', JSON.stringify(Tasks));
    }
}

//  Clear tasks on click of button

function clearTasks(e) {
    //  Option 1

    taskList.innerHTML = '';

    //  Option 2

    //  Research: InnerHTML vs Removechild

    while (taskList.firstChild) { //   Loop till there are no elements in the list
        taskList.removeChild(taskList.firstChild);
    }

    //  Clear all tasks from local storage

    clearTasksLS();

}

//  Clear Tasks

function clearTasksLS() {
    localStorage.clear();
}

//  Filter Tasks

function filterTasks(e) {
    //  Catch what is being typed in

    const text = e.target.value;

    // console.log(text);

    //  Get all list items

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent.toLowerCase();
        if (item.toLowerCase().indexOf(text) != -1) {
            //   If the index value is empty, then the value is -1
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
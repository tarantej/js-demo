//  Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



//  Load all event listeners

loadEventListeners();

function loadEventListeners() {
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

        //  Clear Input

        taskInput.value = '';


        e.preventDefault();
    }

    //  Remove Task

    function removeTask(e) {

        //  Target remove icon on task

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are you sure ?')) {
                e.target.parentElement.parentElement.remove();
            }

        }



        // e.preventDefault();
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

    }

    //  Filter Tasks

    function filterTasks(e) {
        //  Catch what is being typed in

        const text = e.target.value;

        // console.log(text);

        //     //  Get all list items

        document.querySelectorAll('.collection-item').forEach(function(task) {
            const item = task.firstChild.textContent.toLowerCase();
            if (item.toLowerCase().indexOf(text) != -1) { //   If the index value is empty, then the value is -1
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }

}
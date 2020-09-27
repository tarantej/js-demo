/*--------------------------------------------------------------------------------------------------- */

//  UI & Add Task Items

/*--------------------------------------------------------------------------------------------------- */


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

    //  Add Task

    function addTask(e) {

        //  Check for value

        if (taskInput.value === '') {
            alert('Task Input cannot be blank');
        }

        console.log(taskInput);

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

        link.innerHTML = "<i class='fa fa-minus-circle'></i>"

        //  Append Link to listItem

        listItem.appendChild(link);

        //  Append listItem to List

        taskList.appendChild(listItem);

        //  Clear Input

        taskInput.value = '';


        e.preventDefault();
    }
}


/*--------------------------------------------------------------------------------------------------- */

//  Delete & Filter Tasks

/*--------------------------------------------------------------------------------------------------- */
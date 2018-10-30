'use strict';

//check for valid dates

// import addToDo from './add-todo.js';
// import todoList from './todo-list.js';
// import store from './todo-api.js';


// localStorage.removeItem('todo');

const form = document.getElementById('create-task');
const el = form.elements;
const taskList = document.getElementById('task-list');

var data = JSON.parse(localStorage.getItem('todo'));

function display(){ 
    let li = '';
    
    for(let i = 0; i < data.length; i++){
        li += '<li>' + data[i].task + '</li><button name="' + i + '">Remove</button>';
    }
    
    taskList.innerHTML = li;
}

taskList.addEventListener('click', function(event) {
    let ind = event.target.name;
    data.splice(ind);
    display();
});

if(localStorage.getItem('todo')){

    display();

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        var item = {
            task: el.task.value,
            date: new Date(el.dueDate.value),
            complete: false
        };
    
        data.push(item);
        localStorage.setItem('todo', JSON.stringify(data));
        console.log(localStorage.getItem('todo'));

        display();

    });
} else {
    localStorage.setItem('todo', JSON.stringify([]));
}
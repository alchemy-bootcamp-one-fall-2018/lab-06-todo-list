'use strict';

//check for valid dates

// import addToDo from './add-todo.js';
// import todoList from './todo-list.js';
// import store from './todo-api.js';


// localStorage.removeItem('todo');

const form = document.getElementById('create-task');
const el = form.elements;

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    var data = [localStorage.getItem('todo')];
    console.log('data:', data);
    
    const item = {
        task: el.task.value,
        date: new Date(el.dueDate.value),
        complete: false
    };

    if(data[0]) {
        data.push(item);
    } else {
        data[0] = item;
    }
    console.log('data: ', data);

    localStorage.setItem('todo', data);
});
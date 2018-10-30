'use strict';

//check for valid dates

// import addToDo from './add-todo.js';
// import todoList from './todo-list.js';
// import store from './todo-api.js';


// localStorage.removeItem('todo');

const form = document.getElementById('create-task');
const el = form.elements;

if(localStorage.getItem('todo')){

    form.addEventListener('submit', function(event){
        event.preventDefault();
    
        var data = JSON.parse(localStorage.getItem('todo'));
        console.log('data', data);
        
        var item = {
            task: el.task.value,
            date: new Date(el.dueDate.value),
            complete: false
        };
    
        data.push(item);
        localStorage.setItem('todo', JSON.stringify(data));
        console.log(localStorage.getItem('todo'));

        for(let i = 0; i < data.length; i++){
            console.log(data[i].task);
        }

    });
} else {
    localStorage.setItem('todo', JSON.stringify([]));
}
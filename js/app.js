'use strict';

//check for valid dates

// import addToDo from './add-todo.js';
// import todoList from './todo-list.js';
// import store from './todo-api.js';


// localStorage.removeItem('todo');

const form = document.getElementById('create-task');
const el = form.elements;


console.log(localStorage.getItem('todo'));
if(localStorage.getItem('todo')){

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        // var data = JSON.parse(localStorage.getItem('todo'));
        // console.log('data initial:', data);
        // console.log(data[0]);
    
        var data = JSON.parse(localStorage.getItem('todo'));
        
        var item = {
            task: el.task.value,
            date: new Date(el.dueDate.value),
            complete: false
        };
    
        data.push(item);
        localStorage.setItem('todo', JSON.stringify(data));
        console.log(localStorage.getItem('todo'));
        
        // item = JSON.stringify(item);
        
        // if(data) {
        //     data += ',' + item;
            
        // } else {
        //     data = item;
        // }
        
        // localStorage.setItem('todo', JSON.stringify(data));
    
        // console.log('data final:', localStorage.getItem('todo'));
        // for(let i = 0; i < data.length; i++) {
        //     console.log('loop:', data[i]);
        // }
    });
} else {
    localStorage.setItem('todo', JSON.stringify([]));
}
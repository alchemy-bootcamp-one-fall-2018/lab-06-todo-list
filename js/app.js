'use strict';

//check for valid dates

// import addToDo from './add-todo.js';
// import todoList from './todo-list.js';
// import store from './todo-api.js';


// localStorage.removeItem('todo');

const form = document.getElementById('create-task');
const el = form.elements;

console.log('data initial', localStorage.getItem('todo'));
form.addEventListener('submit', function(event){
    event.preventDefault();
    
    var data = JSON.parse(localStorage.getItem('todo'));
    console.log('data initial:', data);

    var item = {
        task: el.task.value,
        date: new Date(el.dueDate.value),
        complete: false
    };

    item = JSON.stringify(item);

    if(data) {
        data += ',' + item;
        
    } else {
        data = item;
    }

    data = JSON.stringify(data);
    
    // for(let i = 0; i < data.length; i++) {
        //     console.log('loop:', data[i]);
        // }
        
    localStorage.setItem('todo', data);
    console.log('data final', data);
});

var a = '{ "name":"John", "age":30, "city":"New York"}';
var b = JSON.parse(a);
console.log(b);
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

console.log('data initial', data);

var item = {};

function display(){ 
    let li = '';
    
    for(let i = 0; i < data.length; i++){
        li += '<li class="' + data[i].classColor + '">' + data[i].task + '</li><button name="' + i + '">Remove</button>';
    }
    
    taskList.innerHTML = li;
}

taskList.addEventListener('click', function(event) {
    let ind = event.target.name;
    data.splice(ind, 1);
    localStorage.setItem('todo', JSON.stringify(data));
    display();
});

if(localStorage.getItem('todo')){

    display();

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        item = {
            task: el.task.value,
            date: new Date(el.dueDate.value),
            complete: false
        };

        let today = new Date();
        // let month = item.date.getMonth() + 1;
        // let day = item.date.getDate();
        // let year = item.date.getFullYear();
        // let tMonth = today.getMonth() + 1;
        // let tDay = today.getDate();
        // let tYear = today.getFullYear();

        if(item.complete === false && item.date >= today) {
            item['classColor'] = 'blue';
        } else if(item.complete){
            item['classColor'] = 'green';
        } else {
            item['classColor'] = 'red';
        }

        console.log(item.classColor);
    
        data.push(item);
        localStorage.setItem('todo', JSON.stringify(data));

        display();

    });
} else {
    localStorage.setItem('todo', JSON.stringify([]));
}
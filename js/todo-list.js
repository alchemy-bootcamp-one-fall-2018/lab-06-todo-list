'use strict';

//Displays todo list on DOM

import store from './todo-api.js';

console.log(store.a);

let item = '';
const taskList = document.getElementById('task-list');

function display(){
    for(let i = 0; i < store.data.length; i++) {
        item += '<li>Task: ' + store.data[i].task + 'Due Date: ' + store.data[i].date + '</li>';
    }

    taskList.innerHTML = item;
    item = '';
}

display();
    
const todoList = {
    init(todo) {
        store.init(todo);
        display();
        console.log('data: ', store.data);
    }

};

export default todoList;
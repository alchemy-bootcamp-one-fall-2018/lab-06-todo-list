'use strict';

//Displays todo list on DOM

import store from './todo-api.js';

console.log(store.a);

const todoList = {

    init(todo) {
        const taskList = document.getElementById('task-list');
        let item = '';

        
        store.init(todo);
        for(let i = 0; i < store.data.length; i++){
            item += '<li>Task: ' + store.data[i].task + '</li>';
        }
        taskList.innerHTML = item;
        console.log('data: ', store.data);
    }

};

export default todoList;
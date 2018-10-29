'use strict';

//Displays todo list on DOM

import store from './todo-api.js';

const todoList = {

    init(todo) {
        const taskList = document.getElementById('task-list');

        
        store.init(todo);
        taskList.innerHTML = '<li>' + store.data[0].task + '</li>';
        console.log(store.data);
    }
};

export default todoList;
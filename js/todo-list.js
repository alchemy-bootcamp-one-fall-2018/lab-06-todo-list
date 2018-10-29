'use strict';

//Displays todo list on DOM

import store from './todo-api.js';

const todoList = {

    init(todo) {
        store.init(todo);
    }
};

export default todoList;
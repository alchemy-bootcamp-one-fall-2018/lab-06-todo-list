'use strict';

import addTodo from './add-todo.js';
import todoApi from './todo-api';
import todoList from './todo-list';

todoList.init(function(task) {
    todoApi.add(task);
    todoList.add(task);
});


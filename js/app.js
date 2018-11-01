/* eslint-disable no-console */

import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todosApi from './todos-api.js';

const todos = todosApi.getAll();

todoList.init(todos, function(todo) {
    todosApi.remove(todo);
});

addTodo.init(function(todo) {

    todosApi.add(todo);

    todoList.add(todo);
});



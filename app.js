// main entry point

import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todo-api.js';

addTodo.init(function(task) {
    console.log(task);
    todoList.add(task);
    todoApi.add(task);
});

const tasks = todoApi.getAll();
todoList.init(tasks);

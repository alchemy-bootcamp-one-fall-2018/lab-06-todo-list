/* exported todos */

import addTodo from './add-todo.js';
import todosApi from './todo-api.js';

const todos = todosApi.getAll();

// eslint-disable-next-line no-console
console.log(todos);

 
addTodo.init();
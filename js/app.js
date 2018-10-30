
import addTodo from './add-todo.js';
import todoApi from './todo-api.js';

const todo = todoApi.getAll();

// eslint-disable-next-line no-console
console.log(todo);

 
addTodo.init();
import addTodo from './add-todo.js';
//import todoList from './todo-list.js';
import todoApi from './todo-api.js';

const todos = todoApi.getAll();
console.log(todos);

addTodo.init(function(todo) {
    todoApi.add(todo);
});
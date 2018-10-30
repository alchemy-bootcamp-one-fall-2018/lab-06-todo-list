
import addTodo from './add-todo.js';
import todoApi from './todo-api.js';
import todoList from './todo-list.js';

const todo = todoApi.getAll();

// eslint-disable-next-line no-console
console.log(todo);

 
addTodo.init(todo, function(todo) {
    todoApi.add(todo);
    todoList.add(todo);
});
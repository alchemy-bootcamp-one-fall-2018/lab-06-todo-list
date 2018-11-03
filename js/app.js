
// import addTodo from './add-todo.js';
import todoApi from './todo-api.js';
import todoList from './todo-list.js';

todoList.init(function(task) {
    todoApi.add(task);
    todoList.add(task);
});

const tasks = todoApi.getAll();

todoList.init(tasks, function(task) {
    todoApi.remove(task);
});
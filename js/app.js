import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todo-api.js';

const tasks = todoApi.getAll();

todoList.init(tasks, function(task) {
    todoApi.onRemove(task);
}

addTask.init(function(todo) {
    todoApi.add(task);
    todoList.add(task);
});
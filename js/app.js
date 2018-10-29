import addTodo from './add-todo.js';
import todoList from './todo-list.js';

addTodo.init(function(task) {
    
    todoList.add(task);
});
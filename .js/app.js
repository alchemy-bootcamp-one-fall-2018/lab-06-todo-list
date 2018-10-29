import addTodo from './add-todo.js';
import todoList from './todo-list.js';
import todoApi from './todos-api.js';

const todos = todosApi.getAll();

todoList.init(todos, function(todo) {
    todoApi.remove(todo);
});

addTodo.init(function(todo) {

    todosApi.add(todo);

    todoList.add(todo);
});



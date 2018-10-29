import addTodo from './add-todo';
// import todoList from './todo-list.js';
import todoApi from './todo-api.js';

const todos = todoApi.getAll();
// console.log(todos);

todoList.init(todos, function(todo) {
    //  onRemove listener
    
    todoApi.remove(todo);
});

addTodo.init(function(todo) {
    // this is the onAdd listener

    // tell the api service first
    todoApi.add(todo);

    // then update components
    todoList.add(todo);
});



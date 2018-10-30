import addTodo from './add-todo.js';
import todoList from './todo-list.js';

addTodo.init(function(todo) {
  // this is the onAdd listener

  

  // then update components
    todoList.add(todo);
});
import todoApi from './todo-Api.js';
import addToDo from './add-Todo.js';
import todoList from './todo-List.js';

const todos = todoApi.getAll();


todoList.init(todos, function(todo) {

    todoApi.remove(todo);
});

addToDo.init(function(todo){
    todoApi.add(todo);
    todoList.add(todo);
});
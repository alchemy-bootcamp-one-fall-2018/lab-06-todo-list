import addToDo from './add-todo.js';
import toDoApi from './todo-api.js';
import toDoList from './todo-list.js';

const toDos = toDoApi.getAll();

toDoList.init(toDos, function(toDo) {
    toDoApi.remove(toDo);
});

addToDo.init(function(toDo) {
    toDoApi.add(toDo);
    toDoList.add(toDo);
});
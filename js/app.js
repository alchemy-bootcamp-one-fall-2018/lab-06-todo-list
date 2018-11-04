import addToDo from './add-todo.js';
import toDoList from './todo-List.js';
import toDosApi from './todos-api.js';

const toDos = toDosApi.getAll();

toDoList.init(toDos, function(toDo) {
    // this is the onRemove listener
    toDosApi.remove(toDo);
});

addToDo.init(function(toDo) {
    // this is the onAdd listener

    // tell the api service first
    toDosApi.add(toDo);

    // then update components
    toDoList.add(toDo);
});
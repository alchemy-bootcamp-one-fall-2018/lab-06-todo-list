import addToDo from './add-todo.js';
import toDoList from './todo-List.js';
import toDoApi from './todo-api.js';

const toDo = toDoApi.getAll();

toDoList.init(toDo, function(toDo) {
    // this is the onRemove listener

    toDoApi.remove(toDo);
});

addToDo.init(function(toDo) {
    // this is the onAdd listener

    // tell the api service first
    toDoApi.add(toDo);

    // then update components
    toDoList.add(toDo);
});
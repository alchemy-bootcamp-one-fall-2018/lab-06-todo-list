import addToDo from './add-toDo.js';
import toDoList from './toDo-list.js';
import toDoApi from './toDo-api.js';

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
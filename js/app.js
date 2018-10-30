import addToDo from './add-todo.js';
import toDoList from './todo-List.js';
import toDoApi from './todo-api.js';

const toDo = toDoList.getAll();

toDoList.init(toDo, function() {
    // this is the onRemove listener
    toDoList.onRemove();
});

addToDo.init(function(toDo) {
    // this is the onAdd listener

    // tell the api service first
    toDoApi.add(toDo);

    // then update components
    toDoList.add(toDo);
});
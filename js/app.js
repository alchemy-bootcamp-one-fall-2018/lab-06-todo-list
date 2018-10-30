//`app` calls `addTodo.init` passing in `onAdd` callback function
import addToDoItem from './add-todo.js';
import toDoApi from './todo-api.js';
import toDoList from './todo-list.js';

const listItems = toDoApi.getAll();

toDoList.init(listItems, function(toDo) {
    // onRemove listener

    toDoApi.remove(toDo);
});

form.addEventListener('submit', function(event) {

    addToDoItem.init(function(toDo) {
    //onAdd listener
        toDoApi.add(toDo);
    //tell api service
        toDoList.add(toDo);
    //update components of list
    });
});
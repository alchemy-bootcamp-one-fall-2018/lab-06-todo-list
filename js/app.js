//`app` calls `addTodo.init` passing in `onAdd` callback function
import addToDoItem from './add-todo.js';
import toDoApi from './todo-api.js';
import toDoList from './todo-list.js';

const listItems = toDoApi.getAll();

toDoList.init(listItems, function(toDo) {
    // onRemove listener

    toDoApi.remove(toDo);
});

addToDoItem.init(function(toDo) {

    toDoApi.add(toDo);
    toDoList.add(toDo);
});
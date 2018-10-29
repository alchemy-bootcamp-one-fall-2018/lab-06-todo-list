import addToDo from './add-todo.js';
import taskList from './todo-list.js';

addToDo.init(function(task){

    taskList.add(task);

});




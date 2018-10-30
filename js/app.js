//import code here
import addTodo from 'js./add-todo.js';
import todoList from 'js.todo-list.js';
import tasksApi from 'js.todo-api.js';
//import addFruit from './add-fruit.js';

const lists = tasksApi.getAll();

//todoList.init(lists) {
//}                                //left out event handler


addTodo.init(function(task) {            //onAdd Listener
    tasksApi.add(task);                     //tell the Api first
    todoList.add(task);                  //update the components
});
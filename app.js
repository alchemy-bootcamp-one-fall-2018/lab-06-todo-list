import tasksApi from './js/tasks-api.js';
import addForm from './js/add-todo.js';
import taskList from './js/todo-list.js';

// const tasks = tasksApi.getAll();

// taskList.init(function(tasks) {
//     console.log('banana', tasks);
// });

addForm.init(function(task) {
    tasksApi.add(task);
    taskList.add(task);
});

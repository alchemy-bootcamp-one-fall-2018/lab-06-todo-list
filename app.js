import tasksApi from './js/tasks-api.js';
import addForm from './js/add-todo.js';

addForm.init(function(task) {
    tasksApi.add(task);
});

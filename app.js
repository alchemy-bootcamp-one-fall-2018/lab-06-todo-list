import tasksApi from './js/tasks-api.js';
import addForm from './js/add-todo.js';
import taskList from './js/todo-list.js';

const tasks = tasksApi.getAll();

taskList.init(tasks, (task) => {
    tasksApi.remove(task);
});

addForm.init((task)=> {
    tasksApi.add(task);
    taskList.add(task);
});

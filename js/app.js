import tasksApi from './todo-api.js';
import addtasks from './add-todo.js';
//add tasks
const tasks = tasksApi.getAll();

tasklist.init(tasks, function(tasks) {// need to find and refine
    tasksApi.remove(tasks);

});

addtasks.init(function(tasks) {
    tasksApi.add(tasks);
    tasklist.add(tasks); //find or create this
   // console.log('please do something!');
});
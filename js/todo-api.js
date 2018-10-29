// create an array that can have data added to it

let tasks = [];

function saveTasks() {

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

const tasksApi = {
    getAll() {
        const json = localStorage.getItem('tasks');
        if(json) {
            tasks = JSON.parse(json);
        }
        return tasks;
    },
    add(task) {
        tasks.push(task);

        saveTasks();
    },
    remove(tasks) {
        const index = tasks.indexOf(tasks);
        if(index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
    }
};
export default tasksApi;
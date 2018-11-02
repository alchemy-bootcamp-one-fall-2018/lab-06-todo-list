let tasks = [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const tasksApi = {
    add(task) {
        tasks.push(task);
        saveTasks();
    }
};

export default tasksApi;
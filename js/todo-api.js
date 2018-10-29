let tasks = []; //bucket

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

const tasksApi = {
    add(tasks) {
        // 1. add to our array
        tasks.push(tasks);
        // 2. save array to localStorage
        saveTasks();
    }    
};

export default tasksApi;


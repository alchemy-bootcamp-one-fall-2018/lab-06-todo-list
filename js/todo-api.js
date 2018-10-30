let tasks = [
    {
        type: 'Read chapters',
        date: new Date('10/31/18')
    },
    {
        type: 'Do Not Cry',
        date: new Date('11/1/18')
    },
    {
        type: 'Sleep',
        date: new Date('11/15/18')
    }
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const todoApi = {
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
        if(index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
    }
};


export default todoApi;
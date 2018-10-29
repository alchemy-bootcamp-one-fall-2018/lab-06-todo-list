// methods for data

let tasks = [
    {
        task: 'go to sleep',
        date: new Date('2008-11-20')
    },
    {
        task: 'get a dog',
        date: new Date('2018-12-25')
    }
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function customParser(key, value) {
    if(key !== 'date') return value;
    return new Date(value);
}

const taskApi = {
    getAll() {
        const json = localStorage.getItem('tasks');
        if(json){
            tasks = JSON.parse(json, customParser);
        }
        return tasks;
    },
    add(task) {
        tasks.push(task);
        saveTasks();
    }
};

export default taskApi;
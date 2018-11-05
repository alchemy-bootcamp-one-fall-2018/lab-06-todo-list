let tasks = [   
    //example chores for display
    {
        chore: 'wash dog',
        due: new Date('2018/11/27'),
    },
    {
        chore: 'laundry',
        due: new Date('2018/12/13'),
    }
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const taskApi = {
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
    
    remove(task) {
        const index = tasks.indexOf(task);
        if(index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
    }

};

export default taskApi;
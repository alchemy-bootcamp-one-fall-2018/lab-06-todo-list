let tasks = [
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

// function customParser(tasks) {
//     if(tasks !== 'due') return tasks;
//     return new Date(tasks.due);
// }

const taskApi = {
    getAll() {
        const json = localStorage.getItem('tasks');
        if(json) {
            tasks = JSON.parse(json); 
        }                                   
        return tasks;                                    
    },

    // check(task) {
    //     let today = new Date();
    //     if(task.due < today) {
    //         console.log('test');
    //     }
    // },

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
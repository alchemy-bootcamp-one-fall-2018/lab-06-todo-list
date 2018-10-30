let tasks = [
    {
        task: 'sleep',
        due: new Date('10/30/2018')
    },
    {
        task: 'eat',
        due: new Date('10/31/2018')
    }

];

function saveTasks() {
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}


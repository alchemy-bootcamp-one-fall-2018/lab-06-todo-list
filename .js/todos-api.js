let todos = [
    {
        task: 'Do laundry',
        date: new Date('10/30/2018')
    },
    {
        task: 'Run',
        date: new Date.now()
    }
];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const todosApi = {
    getAll() {
        const json = localStorage.getItem('todos');
        if(json) {
            todos = JSON.parse(json);
        }
        return todos;
    },
    add(todo) {
        todos.push(todo);
        saveTodos();
    },
    remove(todo) {
        const index = todos.indexOf(todo);
        if(index !== -1) {
            todos.splice(index, 1);
            saveTodos();
        }
    }
};

export default todosApi;
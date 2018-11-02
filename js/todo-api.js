let todos = [
    {
        task:'Meal Prep',
        date:new Date('10/22/2018')
    },
    {
        task:'Plan party',
        date:new Date('10/20/2018')
    },
    {
        task:'Pay bills',
        date:new Date('10/30/2018')
    },
];

function saveTodos() {
    localStorage.setItem('todo', JSON.stringify(todos));
}

const todoApi = { 
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

export default todoApi;
let todos = [
    {
        task: 'Grocery shopping',
        dueDate: [new Date('10/30/18')]
    },
    {
        task: 'Do laundry',
        dueDate: [new Date('10/31/18')]
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
    // 1. add to our array
        todos.push(todo);
    // 2. save array to localStorage
        saveTodos();
    }
    
};

export default todosApi;
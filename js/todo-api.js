
let todos = [
    {
        task: 'lab-6',
        due: new Date('October 30, 2018'),
        done: false
    },
    {
        task: 'sleep',
        due: new Date('October 29, 2018'),
        done: false
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
    // add(todo) {
    //     todos.push(fruit);
    //     saveTodos();
    // },
    // remove(todo) {
    //     const index = todos.indexOf(todo);
    //     if(index !== -1) {
    //         fruits.splice(index, 1);
    //         saveTodos();
    //     }
    }
};

export default todosApi;
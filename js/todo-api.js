
let todo = [
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

function saveTodo() {
    localStorage.setItem('todo', JSON.stringify(todo));
}

const todoApi = {
    getAll() {
        const json = localStorage.getItem('todo');
        if(json) {
            todo = JSON.parse(json);
        }
        return todo;
    },
    add(todo) {
        todo.push(fruit);
        saveTodo();
    },
    remove(todo) {
        const index = todo.indexOf(todo);
        if(index !== -1) {
            fruits.splice(index, 1);
            saveTodo();
        }
    }
};

export default todoApi;
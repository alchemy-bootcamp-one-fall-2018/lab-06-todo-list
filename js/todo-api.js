

let todos = [
    {
        task: 'Finish lab',
        due: new Date('10/30/2018'),
        done: false
    }
];




const todoApi = {
    getAll() {
        const json = localStorage.getItem('todos');
        if(json) {
            todos = JSON.parse(json);
        }
        return todos;
    }


};

export default todoApi;
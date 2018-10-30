let toDos = [
    // {
    //     task: 'Finish Lab',
    //     due: new Date('10/30/2018').toLocaleString()
    // },
    // {
    //     task: 'Finish Element Counter Lab',
    //     due: new Date('11/01/2018').toLocaleString()
    // }
];

function saveToDos() {
    localStorage.setItem('toDo', JSON.stringify(toDos));
}

const toDoApi = {
    getAll() {
        const json = localStorage.getItem('toDO');
        if(json) {
            toDos = JSON.parse(json);
        }
        return toDos;
    },
    
    add(toDo) {
        toDos.push(toDo);
        saveToDos();
    },

    remove(toDo) {
        const index = toDos.indexOf(toDo);
        if(index !== -1) {
            toDos.splice(index, 1);
            saveToDos();
        }
    }
};

export default toDoApi;

let toDos = [
    {
        task: 'Wash car',
        due: new Date('11/10/2018')
    },
    {
        task: 'Clean apartment',
        date: new Date ('11/11/2018')
    }
];

function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function customParser(key, value) {
    if(key !== 'date') return value;    
    return new Date(value);
}

const toDosApi = {
    getAll() {
        const json = localStorage.getItem('toDos');
        if(json) {
            toDos = JSON.parse(json, customParser);
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

export default toDosApi;
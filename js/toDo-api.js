
let toDos = [];

function saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

const toDoApi = {
    getAll() {
        const json = localStorage.getItem('toDos');
        if(json) {
            toDos = JSON.parse(json);
        }
        return toDos;
    },
    add(toDo) {
        // 1. add to our array
        toDos.push(toDo);
        // 2. save array to localStorage
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
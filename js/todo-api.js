let toDos = [

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
            return index;
        }
    }
};

export default toDoApi;
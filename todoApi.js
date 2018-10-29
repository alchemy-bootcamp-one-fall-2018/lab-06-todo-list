let toDos = []; 

function savetoDo() {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

const todoApi = {
    add(toDo) {
        toDos.push(toDo);

        savetoDo();
    }
};
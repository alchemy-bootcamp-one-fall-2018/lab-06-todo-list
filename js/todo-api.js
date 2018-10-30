
//let task = [
    //{
  //      name: 'Apple',
      //  color: 'red',
        //image: 'apple.png'
    //},
    //{
      //  name: 'Banana',
        //color: 'yellow',
        //image: 'banana.png'
    //}
//];

function saveToDo() {
    localStorage.setItem('todo', JSON.stringify(toDo));
}

const toDoApi = {
    getAll() {
        const json = localStorage.getItem('toDo');
        if(json) {
            toDo = JSON.parse(json);
        }
        return toDo;
    },
    add(toDo) {
        // 1. add to our array
        toDo.push(toDo);
        // 2. save array to localStorage
        saveToDo();
    },
    remove(toDo) {
        const index = toDo.indexOf(toDo);
        if(index !== -1) {
            toDo.splice(index, 1);
            saveToDo();
        }
    }
};

export default toDoApi;
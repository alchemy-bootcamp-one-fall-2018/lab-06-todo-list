let listItems = [
    {
        todo: 'Finish lab',
        date: new Date(),
    },
    {
        todo: 'Get dog',
        date: new Date(),
    }
];

function saveToDos() {
    localStorage.setItem('listItems', JSON.stringify(listItems));
}

// function customParser(key, value) {
//     if(key !== 'date') return value;//due?
//     return new Date(value);
// }

const toDoApi = {
    // getAll() {
    //     const saved = localStorage.getItem('listItems');
    //     if(saved) {
    //         listItems = JSON.parse(saved, customParser);
    //     }
    //     return listItems;
    // },
    getAll() {
        const json = localStorage.getItem('listItems');
        if(json) {
            listItems = JSON.parse(json);
        }
        return listItems;
    },
    add(toDo) {
        listItems.push(toDo);
        saveToDos();
    },
    remove(toDo) {
        const index = listItems.indexOf(toDo);
        if(index !== -1) {
            listItems.splice(index, 1);
            saveToDos();
        }
    }
};

export default toDoApi;
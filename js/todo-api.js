let lists = [
    {
        task: 'wash dog',
        due: '10/30/18'
    },
    {
        task: 'laundry',
        due: '11/01/18'
    }
];

function saveTasks() {
    localStorage.setItem('lists', JSON.stringify(lists));
}

const tasksApi = {
    getAll() {
        const json = localStorage.getItem('lists');
        if(json) {
            lists = JSON.parse(json);
        }
        return lists;
    },                               //left out remove 
};

export default tasksApi;
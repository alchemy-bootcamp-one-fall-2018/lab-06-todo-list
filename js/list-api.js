let lists = [
    {
        // name: 'Go Skating',
        // due:   new Date('10/30/2018'),
        // done:  false
    },
    {
        // name: 'Go Skating',
        // due:   new Date('11/03 /2018'),
        // done:  false
    }, 
];
function saveLists() {
    localStorage.setItem('lists', JSON.stringify(lists));
}
const listsApi = {
    getAll() {
        const json = localStorage.getItem('lists');
        if(json) {
            lists = JSON.parse(json);
        }
        return lists;
    },
    add(list) {
        lists.push(list);
        saveLists();
    },
    remove(list) {
        const index = lists.indexOf(list);
        if(index !== -1) {
            list.splice(index, 1);
            saveLists();
        }
    }
};
//fix remove button
export default listsApi;
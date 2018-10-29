let items = [
    {
        name: 'Go Grocery Shopping', 
        date: new Date('10/30/2018')
    },
    {
        name: 'Take the Dog for a Walk',
        date: new Date('10/30/2018')
    }
]; 

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items)); 
}

const itemsApi = {
    getAll() {
        const json = localStorage.getItem('items'); 
        if(json) {
            items = JSON.parse(json); 
        }
        return items; 
    }, 
    add(item) {
        items.push(item);   
        saveItems();
    },
    remove(item) {
        const index = items.indexOf(item); 
        if(index !== -1) {
            items.splice(index, 1); 
            saveItems(); 
        }
    }
}; 

export default itemsApi;
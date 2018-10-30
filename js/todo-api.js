// 'use strict';

const store = {

    data: JSON.parse(localStorage.getItem('todo')),
    
    init(item){
        store.data.push(item);
        console.log('data after push', store.data);
        localStorage.setItem('todo', JSON.stringify(store.data));  
    },

    remove: function(event) {
        let ind = event.target.name;
        store.data.splice(ind, 1);
        localStorage.setItem('todo', JSON.stringify(store.data));
    }

};

export default store;
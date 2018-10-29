'use strict';

// Array that stores all tasks on local storage
// localStorage.setItem('todo', JSON.stringify('a: 1'));
const store = {
    // a: function() {
    //     return JSON.parse(localStorage.getItem('todo'));
    // },

    data: JSON.parse(localStorage.getItem('todo')),
    
    init(todo){
        this.data.push(todo);
        
        localStorage.setItem('todo', JSON.stringify(this.data));
    },

};

export default store;
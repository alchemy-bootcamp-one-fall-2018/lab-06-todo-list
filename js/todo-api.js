'use strict';

// Array that stores all tasks on local storage
 
const store = {
    data: [],

    init(todo){
        this.data.push(todo);
        console.log(this.data);

    }
};

export default store;
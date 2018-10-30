'use strict';

import store from './todo-api.js';

const taskList = document.getElementById('task-list');

function display(){
    let item = '';
    var today = new Date();
    var due = '';

    for(let i = 0; i < store.data.length; i++) {
        // var tempMonth = store.data[i].month;
        // var tempDay = store.data[i].day;
        // var tempYear = store.data[i].year;
        // console.log('temps', tempMonth, tempDay, tempYear);
        item += '<li>' + store.data[i].task + '</li>';
        console.log('date: ', store.data[i].date);
    }

    taskList.innerHTML = item;
}

if(store.data){
    display();
}
    
const todoList = {
    init(todo) {
        if(store.data){
            store.init(todo);
            display();
            console.log('data: ', store.data);
        }
    }

};

export default todoList;
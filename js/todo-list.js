// 'use strict';

import store from './todo-api.js';

const taskList = document.getElementById('task-list');

const display = {

    init() { 
        let li = '';
        store.data = JSON.parse(localStorage.getItem('todo'));
        
        for(let i = 0; i < store.data.length; i++){
            li += '<li class="' + store.data[i].classColor + '">' + store.data[i].task + '</li><button name="' + i + '">Remove</button>';
        }
        
        taskList.innerHTML = li;
    },

    remove: function(event) {
        let ind = event.target.name;
        store.data.splice(ind, 1);
        localStorage.setItem('todo', JSON.stringify(store.data));
        display.init();
    }
};

export default display;
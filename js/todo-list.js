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

    removeDisplay: function(event) {
        store.remove(event);
        display.init();
    }
};

export default display;
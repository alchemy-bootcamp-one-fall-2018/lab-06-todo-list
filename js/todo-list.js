// 'use strict';

// import store from './todo-api.js';

const taskList = document.getElementById('task-list');

var data = JSON.parse(localStorage.getItem('todo'));
const display = {

    init() { 
        let li = '';
        data = JSON.parse(localStorage.getItem('todo'));
        
        for(let i = 0; i < data.length; i++){
            li += '<li class="' + data[i].classColor + '">' + data[i].task + '</li><button name="' + i + '">Remove</button>';
        }
        
        taskList.innerHTML = li;
    },

    remove: function(event) {
        let ind = event.target.name;
        data.splice(ind, 1);
        localStorage.setItem('todo', JSON.stringify(data));
        display.init();
    }
};

export default display;
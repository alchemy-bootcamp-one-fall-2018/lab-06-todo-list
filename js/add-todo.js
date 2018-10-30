'use strict';

import todoList from './todo-list.js';
import store from './todo-api.js';

const addToDo = {
    
    init(){      
        const form = document.getElementById('create-task');
        const el = form.elements;
        form.addEventListener('submit', function(event){
            event.preventDefault();
            
            const todo = {
                task: el.task.value,
                date: new Date(el.dueDate.value),
                // day: this.date.getDate(),
                // month: this.date.getMonth(),
                // year: this.date.getFullYear(),
                complete: false
            };
            console.log(Date.now());

            todoList.init(todo);
            console.log('date at creation: ', todo.date);
        });

    }
};


export default addToDo;
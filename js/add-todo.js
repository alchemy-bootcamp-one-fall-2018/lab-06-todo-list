// 'use strict';

import display from './todo-list.js';
import store from './todo-api.js';

const form = document.getElementById('create-task');
const el = form.elements;
const taskList = document.getElementById('task-list');

console.log('data initial', store.data);

var item = {};

const addToDo = {

    init() {
        if(localStorage.getItem('todo')){
    
            display.init();

            taskList.addEventListener('click', function(event) {
                display.remove(event);
            });
    
            form.addEventListener('submit', function(event){
                
                event.preventDefault();
                
                item = {
                    task: el.task.value,
                    date: new Date(el.dueDate.value),
                    complete: false
                };
    
                let today = new Date();
    
                if(item.complete === false && item.date >= today) {
                    item['classColor'] = 'blue';
                } else if(item.complete){
                    item['classColor'] = 'green';
                } else {
                    item['classColor'] = 'red';
                }


            
                store.data.push(item);
                console.log('data after push', store.data);
                localStorage.setItem('todo', JSON.stringify(store.data));
    
                display.init();
                
            });
        } else {
            localStorage.setItem('todo', JSON.stringify([]));
        }
    },


};
    



export default addToDo;
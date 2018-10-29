'use strict';

//creates new todo list

import todoList from './todo-list.js';

const addToDo = {
    
    init(){      
        const form = document.getElementById('create-task');
        const el = form.elements;
        form.addEventListener('submit', function(event){
            event.preventDefault();

            
            const todo = {
                task: el.task.value,
                date: el.dueDate.value,
                complete: false
            };

            todoList.init(todo);
        });

    }
};


export default addToDo;
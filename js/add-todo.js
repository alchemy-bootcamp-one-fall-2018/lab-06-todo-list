'use strict';

const addTodo = {
    
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const date = new Date(elements.due.value);

            const task = {
                name: elements.task.value,
                date: date
            };

            onAdd(task);

        });
    } 
};

export default addTodo;
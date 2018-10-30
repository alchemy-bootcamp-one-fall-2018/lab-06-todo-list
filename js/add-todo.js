'use strict';

const toDoItem = {
    
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;

            const task = {
                name: elements.task.value,
                date: elements.date.value
            };

            onAdd(task);

            form.requestFullscreen();
            document.activeElement.blur();

        });
    } 
};

export default toDoItem;
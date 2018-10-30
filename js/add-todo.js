const addTodo = {
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            // eslint-disable-next-line
            console.log('eventListener working');
            event.preventDefault();

            const elements = form.elements;

            const todo = {
                task: elements.task.value,
                due: elements.due.value,
                done: elements.done.value
            };

            onAdd(todo);

            form.reset();
            document.activeElement.blur();
        });
    }
};


export default addTodo;
const addTodo = {
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener ('submit', function(event) {
            event.preventDefault();
          
            //form elements
            const elements = form.elements;

            const task = {
                chore: elements.chore.value,
                due: elements.due.value,
            };

            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addTodo;
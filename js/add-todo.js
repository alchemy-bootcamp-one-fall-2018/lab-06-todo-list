const addTodo = {
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;

            const task = {
                type: elements.type.value,
                date: elements.date.value
            };
        
            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};




export default addTodo;
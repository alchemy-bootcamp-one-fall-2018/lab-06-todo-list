
const addTodo = {

    init(onAdd) {
        const form = document.getElementById('add-todo-form');
    

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            
            const todo = {
                task: elements.name.value,
                due: elements.color.value,
                done: elements.image.value
            };

            onAdd(todo);

            form.reset();
            document.activeElement.blur();
        });

    }
};

export default addTodo;
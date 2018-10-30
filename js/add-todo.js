
const addTodo = {

    init(onAdd) {
        const form = document.getElementById('add-todo-form');


        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            
            const todo = {
                task: elements.task.value,
                due: elements.due.value,
                done: elements.done.value,
            };

            onAdd(todo);

            form.reset();
            document.activeElement.blur();
        });

    }
};

export default addTodo;
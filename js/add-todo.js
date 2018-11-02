const form = document.getElementById('add-todo');

const addForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const todo = {} ;

            todo.name = elements.task.value;
            
            onAdd(todo);
        });
    }
};

export default addForm;
const form = document.getElementById('add-todo');

const addForm = {
    init(onAdd) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const elements = form.elements;
            const todo = {} ;

            todo.task = elements.task.value;
            todo.dueDate = elements.date.value;
            todo.notes = elements.notes.value;
            
            onAdd(todo);
        });
    }
};

export default addForm;
// component for new todo

const addTodo = {
    init(onAdd) {
        const form = document.getElementById('form-todo');
        
        form.addEventListener('submit', function(event){
            event.preventDefault();

            const elements = form.elements;
            const date = new Date(elements.due.value);

            const task = {
                task: elements.task.value,
                date: date
            };

            onAdd(task);
        });
    }

};

export default addTodo;
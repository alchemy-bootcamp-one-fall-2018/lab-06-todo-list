// component for new todo

const addTodo = {
    init(onAdd) {
        const form = document.getElementById('form-todo');
        
        form.addEventListener('submit', function(event){
            event.preventDefault();

            const elements = form.elements;
            const date = new Date(dateInput.value);

            const tasks = {
                task: elements.task.value,
                date: elements.date.value
            }

            onAdd(tasks);
        }
    }

}

export default addTodo;
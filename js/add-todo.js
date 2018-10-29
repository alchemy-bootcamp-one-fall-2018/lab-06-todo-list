const addToDo = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault.preventDefault();
            const elements = form.elements;
            const toDo = {
                task: elements.task.value,
                due: new Date(elements.date.value),
                
            }
            onAdd(toDo);
        }) 
    }
}
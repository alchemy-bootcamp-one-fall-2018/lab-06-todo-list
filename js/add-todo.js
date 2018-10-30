
const addToDo = {
    init(onAdd) {
        
        const form = document.getElementById('add-form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements;
            const toDo = {
                task: elements.task.value,
                due: elements.due.value
            };

            onAdd(toDo);

            form.reset();
            document.activeElement.blur();
        });
    
    
    }
};

export default addToDo;
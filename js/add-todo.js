const addTodo = {
    init(onAdd) {                                                //init method for initializing the component
        const form = document.getElementByID('add-form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            
            const task = {                                     //I don't think this is right
                task: elements.task.value,
                duedate: new Date(elements.due.value)            //item 5 incomplete (compare date)
            };
            
            onAdd(task);
        
            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addTodo;
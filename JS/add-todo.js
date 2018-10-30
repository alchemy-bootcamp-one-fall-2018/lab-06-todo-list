const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-task');

        form.addEventListener('submit', function(event) {
            
            event.preventDefault();
            console.log('eventListener working');
            
            
            const elements = form.elements;

            const task = {
                task: elements.task.value,
                due: elements.due.value
            };
            // onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addTask;

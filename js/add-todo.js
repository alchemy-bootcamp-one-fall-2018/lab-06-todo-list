

const addToDo = {

    init(onAdd){
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
        
            event.preventDefault();

            const elements = form.elements;

            const task = {

                item: elements.taskInput.value,
                date: elements.dueDate.value
            };
            console.log(task);
            
            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addToDo;
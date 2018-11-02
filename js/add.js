
const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const task = {
                task: elements.task.value,
                date: elements.due.value,
                done: elements.done.value
            };

            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });

    }


};
export default addTask;
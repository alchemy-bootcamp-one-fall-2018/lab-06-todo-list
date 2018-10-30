
const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        console.log('form', form);

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            console.log('elements', elements);

            const task = {
                name: elements.name.value,
                due: elements.due.value,
                done: elements.done.value
            };

            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });

    }


};
export default addTask;
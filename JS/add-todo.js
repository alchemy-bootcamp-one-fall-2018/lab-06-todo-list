const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-task');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const task = {
                task: 'Finish lab',
                due: new Date('10/30/2018')
            };
            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });
    }
};



export default addTask;

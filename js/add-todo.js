const addTasks = {
    // "init" method for initializing the component
    // 1. passed data or callback functions
    // 2. setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

        // below is different way to write this
        // form.onsubmit = function() {};

        // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', function(event) {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            // creat one "task" for object below
            const task = {
                name: elements.name.value,
                description: elements.description.value,
                due: elements.due.value
            };

            onAdd(task);

            form.reset();
            document.activeElement.blur();
        });

    }
};
export default addTasks;
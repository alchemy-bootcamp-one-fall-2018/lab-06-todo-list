//need newDate() @line 24
const addToDoItem = {
    // "init" method for initializing the component
    // 1. passed data or callback functions
    // 2. setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-todo');

        // below is different way to write this
        // form.onsubmit = function() {};

        // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', function(event) {
            // prevent form from reloading page
            event.preventDefault();

            // form elements
            const elements = form.elements;

            // get the values from the form controls
            //const Date = newDate();
            const toDo = {
                todo: elements.todo.value,
                date: elements.date.value
            };

            onAdd(toDo);

            form.reset();
            //document.activeElement.blur();
        });

    }
};

export default addToDoItem;


const addToDo = {

// initializing stuff
// passes data or callback function 
// sets up event listeners

    init(onAdd){
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            // prevent the reload of the page upon using the function
            event.preventDefault();

            // reaches to the form elements ie. list stuff

            const elements = form.elements;

            // actually gets the values from the input boxes

            const task = {

                name: elements.task.value,
                date: elements.Date.value
            };
            onAdd(task);

            form.reset();
            document.activeElement.blue();
        });
    }
};

export default addToDo;
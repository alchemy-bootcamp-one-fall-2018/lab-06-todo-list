const addTodo = {
  // "init" method for initializing the component
  // 1. passed data or callback functions
  // 2. setup some event event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

  // add event listeners
        form.addEventListener('submit', function(event) {
            event.preventDefault();
      
      // form elements
            const elements = form.elements;

      // get the values from the form controls
            const todo = {
                task: elements.task.value,
                dueDate: elements.dueDate.value
            };

            onAdd(todo);
            form.reset();
            document.activeElement.blur();

        });
    }
};

export default addTodo;
const addToDoItem = {

    init(onAdd) {
        const form = document.getElementById('item-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const toDo = {
                todo: elements.todo.value,
                date: elements.due.value
            };

            onAdd(toDo);
            form.reset();
            document.activeElement.blur(); //***
        });
    }
};
export default addToDoItem;
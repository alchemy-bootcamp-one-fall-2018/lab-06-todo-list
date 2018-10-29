const addToDo = {

    init(onAdd) {
        const form = document.getElementById('to-do-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            console.log(elements.date.value);

            const todo = {
                title: elements.title.value,
                date: new Date(elements.date.value).toLocaleDateString()
            };

            onAdd(todo);

            form.reset();
        });
    }
};

export default addToDo;
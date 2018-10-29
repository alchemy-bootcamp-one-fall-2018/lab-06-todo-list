const addToDo = {

    init(onAdd) {
        let form = document.getElementById('to-do-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const toDo = {
                title: elements.title.value
            };

            onAdd(toDo);

            form.reset();
        });
    }
};

export default addToDo;
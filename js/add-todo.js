const toDoItem = {
    
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('button was pressed');
            const elements = form.elements;

            const task = {
                name: elements.item.value,
                date: elements.date.value
            };

            onAdd(task);

            form.requestFullscreen();
            document.activeElement.blur();

        });
    } 
};

export default toDoItem;
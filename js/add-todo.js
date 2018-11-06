import html from './html.js';

function makeTemplate() {
    return html`
    <form id="add-form">
                <label id="task">
                    Task:
                    <input required name="task">
                </label>
                <label id="due" >
                    Due:
                    <input required name="due">
                </label>
                <label id="addButton">
                    <button class="action">Add</button>
                </label>
            </form>
            `;
}

class AddToDo {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');

        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const elements = form.elements;
            const toDo = {
                task: elements.task.value,
                due: elements.due.value
            };
    
            this.onAdd(toDo);
            form.reset();
            document.activeElement.blur();
        });
        return dom;
    }

}

export default AddToDo;
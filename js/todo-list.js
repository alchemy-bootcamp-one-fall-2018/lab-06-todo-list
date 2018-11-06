import html from './html.js';

function makeTemplate() {
    return html`
    <ul class="toDos"></ul>
    `;
}

function makeToDo(toDo) {
    return html`
        <li class="toDo">
            <h3 class="name" id="danger-name">
                ${toDo.task}
            </h3>
            <h3 class=${new Date(toDo.due) > Date.now() ? 'date' : 'overdue'}>
                ${toDo.due}
            </h3>
            <button class="danger" id="danger">Delete</button>
        </li>
    `;

}

class ToDoList {
    constructor(toDos, onRemove) {
        this.toDos = toDos;
        this.onRemove = onRemove;
    }

    render() {
        const dom = makeTemplate();
        this.list = dom.querySelector('ul');

        for(let i = 0; i < this.toDos.length; i++) {
            this.add(this.toDos[i]);
        }
        return dom;
    }
    add(toDo) {
        const dom = makeToDo(toDo);
        if(this.onRemove) {
            const removeButton = dom.querySelector('button');
            removeButton.addEventListener('click', () => {
                this.onRemove(toDo);
            });
        }
        this.list.appendChild(dom);
    }
    remove(index) {
        this.list.querySelectorAll('li')[index].remove();
    }
}

export default ToDoList;
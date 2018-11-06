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

// const list = document.getElementById('toDos');

// const toDoList = {
//     init(toDos, onRemove) {
//         for(let i = 0; i < toDos.length; i++) {
//             toDoList.add(toDos[i]);
//         }
//         toDoList.onRemove = onRemove;
//     },
//     add(toDo) {
//         const dom = makeToDo(toDo);
//         const removeButton = dom.querySelector('button');
//         const listItem = dom.querySelector('li');

//         removeButton.addEventListener('click', function() {
//             toDoList.onRemove(toDo);
//             listItem.remove();
//         });

//         list.appendChild(dom);

//     }
// };

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- //

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
        const listItem = dom.querySelector('li');
        if(this.onSelect) {
            listItem.addEventListener('click', () => {
                this.onSelect(toDo);
            });
        }
        this.list.appendChild(dom);
    }
    remove(index) {
        this.list.querySelectorAll('li')[index].remove();
    }
}

export default ToDoList;
function makeToDo(toDo) {
    const html = /*html*/`
        <li class="toDo">
            <h3 class="name">
                ${toDo.task}
            </h3>
            <h3 class=${new Date(toDo.due) > Date.now() ? 'date' : 'overdue'}>
                ${toDo.due}
            </h3>
            <button class="danger">X</button>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('toDos');

const toDoList = {
    init(toDos, onRemove) {
        for(let i = 0; i < toDos.length; i++) {
            toDoList.add(toDos[i]);
        }
        toDoList.onRemove = onRemove;
    },
    add(toDo) {
        const dom = makeToDo(toDo);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            toDoList.onRemove(toDo);
            listItem.remove();
        });

        list.appendChild(dom);
    }
};

export default toDoList;
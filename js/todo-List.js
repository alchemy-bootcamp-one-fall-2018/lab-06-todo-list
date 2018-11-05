
'use strict';

function makeList(list) {
    const html = /*html*/`
        <li class="todo ${list.date < Date.now() ? 'date-passed' : ''}">
            <h3 class="task">
                ${list.task}
            </h3>
            <h4 class="date">
                ${list.date}
            </h4>
            <button class="danger">X</button>
        </li>
        `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}    

const list = document.getElementById('list');

const toDoList = {
    init(list, onRemove) {
        for(let i = 0; i < list.length; i++) {
            toDoList.add(list[i]);
        }
        toDoList.onRemove = onRemove;
    },
    add(toDo) {
        const dom = makeList(toDo);
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
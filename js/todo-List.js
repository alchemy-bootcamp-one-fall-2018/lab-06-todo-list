function makeList(toDo) {
    const html = /*html*/`
        <li class="toDo">
            <h3  ${toDo.due};"></h3>
            <button class="danger">X</button>
        </li>
        `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}    

const list = document.getElementById('list');

const toDoList = {
    init(toDo, onRemove) {
        for(let i = 0; i < toDo.length; i++) {
            toDo.add(toDo[i]);
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
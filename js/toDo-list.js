
function makeToDo(toDo) {
    const html = /*html*/`
        <li class="item">
            <h3 class="name" style="background: ${toDo.color};">
                ${toDo.name}
            </h3>
            <h4 class="date" style="background: ${toDo.color};">
                ${toDo.date}
            </h4>
            <button class="danger">X</button>
        </li>
    `;

    // A. Create template element to convert string to DOM
    const template = document.createElement('template');

    // B. Assign innerHTML property
    template.innerHTML = html;

    // C. Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}

const list = document.getElementById('todo');

const toDoList = {
    // init
    // should include:
    // 1. initial toDo array
    // 1. onRemove callback
    init(toDo, onRemove) {
        for(let i = 0; i < toDo.length; i++) {
            toDoList.add(toDo[i]);
        }
        toDoList.onRemove = onRemove;
    },
    add(toDo) {
        const dom = makeToDo(toDo);

        // do work of finding elements _before_ appending
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            toDoList.onRemove(toDo);
            listItem.remove();
        });

        // append to <ul>, this will empty the fragment
        list.appendChild(dom);

        var todoDate = new Date(toDo.date);
        if(todoDate < new Date()) {
            listItem.classList.add('late');
        }
    }
};

export default toDoList;
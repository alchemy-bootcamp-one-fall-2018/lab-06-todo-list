function makeTask(task) {
    const html = /*html*/`
        <li class="task">
            <h3 class="type" style="background: ${task.due};">
                ${task.name}
            <h3>
            <button class="delete">X</button>
        </li>
    `;
}

add(task) {
    const dom = makeTask(task);
    const removeButton = dom.querySelector('button');
    const listItem = dom.querySelector('li');
}


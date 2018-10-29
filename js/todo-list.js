function makeTask(task) {
    const html = /*html*/`
        <li class="task">
            <h3 class="type" style="background: ${task.date};">
                ${task.name}
                ${todo.due}
            <h3>
            <button class="delete">X</button>
        </li>
    `;
}



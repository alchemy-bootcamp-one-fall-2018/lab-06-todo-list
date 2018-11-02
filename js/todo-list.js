function addTask(todo) {
    const html = /*html*/`
        <li class="task">
            <h3 class="task-name">
                ${todo.task}
            </h3>
            <p> ${todo.dueDate} </p>
            <p> ${todo.notes} </p>
            <button class="danger">X</button>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('tasks-list');

const taskList = {
    init(tasks) {
        for(let i = 0; i < tasks.length; i++) {
            taskList.add(tasks[i]);
        }
    },
    add(todo) {
        const dom = addTask(todo);

        list.appendChild(dom);
    }

        
};

export default taskList;
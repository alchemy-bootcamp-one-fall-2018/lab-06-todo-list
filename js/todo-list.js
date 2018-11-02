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
    init(tasks, onRemove) {
        for(let i = 0; i < tasks.length; i++) {
            taskList.add(tasks[i]);
        }
        taskList.onRemove = onRemove;
    },
    add(todo) {
        const dom = addTask(todo);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            taskList.onRemove(todo);
            listItem.remove();
        });

        list.appendChild(dom);
    }

        
};

export default taskList;
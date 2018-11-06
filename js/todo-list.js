
function makeTodo(task) {
    const html = /*html*/`
    <li class="task-item">
        <p class="task">${task.task}</p>
        <p class="date">${task.date}</p>
        <button class="danger">X</button>
    </li>
`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('tasks');

const todoList = {
    add(task) {
        const dom = makeTodo(task);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(task);
            listItem.remove();
        });
        list.appendChild(dom);
    },
    init(tasks, onRemove) {
        for(let i = 0; i < tasks.length; i++) {
            todoList.add(tasks[i]);
        }
        todoList.onRemove = onRemove;
    }
};

export default todoList;


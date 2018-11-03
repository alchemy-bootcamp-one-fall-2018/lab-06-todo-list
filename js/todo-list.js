
function makeTodo(tasks) {
    const html = /*html*/`
    <li class="task-item">
        <p class="task">${tasks.task}</p>
        <p class=${new Date(tasks.date) > Date.now() ? 'date' : 'late'}>${tasks.date.toLocaleDateString()}</p>
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


// component for new todo list

function makeTodo(tasks) { 
    const html = /*html*/ `
    <li class="task-item">
        <h3 class="task">${tasks.task}</h3>
        <p>${tasks.date}</p>
        <button class="danger">X</button>
    </li>
`;
    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('task-list');

const taskList = {
    add(task) {
        const dom = makeTodo(task);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
        });

        list.appendChild(dom);

    },
    init(tasks, onRemove) {
        for(let i = 0; i < tasks.length; i++){
            taskList.add(tasks[i]);
        }
        taskList.onRemove = onRemove;
    }
};

export default taskList;
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

        const listItem = dom.querySelector('li');

        list.appendChild(dom);

    },
    init(tasks) {
        for(let i = 0; i < tasks.length; i++){
            taskList.add(tasks[i]);
        }
    }
}

export default taskList;
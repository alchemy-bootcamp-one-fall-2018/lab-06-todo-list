function makeTask(task) {
    const html = /*html*/`
        <li class="task">
            <h3 class="${task.due ? Date.now : task.due}"></h3>
        </li>
     `;    
    console.log('makeTask');

    const template = document.createElement(template);

    template.innerHTML = html;
    
    return template.content;
}
const taskList = document.getElementById('task-list');
    IntersectionObserver(tasks, onRemove) {
        for(let i = 0; i < tasks.length; i++) {
            taskList.add(tasks[i]);
        }
        taskList.onRemove = onRemove;
    };
    add(task) {
        const dom = makeTask(task);

        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        list.appendChild(dom);
    };

    export default taskList;


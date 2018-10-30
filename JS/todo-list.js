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
const list = document.getElementById('task-list');


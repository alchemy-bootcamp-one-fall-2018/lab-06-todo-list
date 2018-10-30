

function makeTask(task) {
    const html = /*html*/`
            <li class="task">
                <h3 class="name" style="background: ${task.color}">
                ${task.name}
                </h3>
                <img src="img/sleep.jpg">
                <button class="danger">X</button>
            </li>
        `;
    
        // A. Create template element to convert string to DOM
    const template = document.createElement('template');
    
        // B. Assign innerHTML property
    template.innerHTML = html;
    
        // C. Return the `content` property which is the dom
        // (In a DocumentFragment)
    return template.content;
}
    
const list = document.getElementById('tasks');
    
const taskList = {
        // init
        // should include:
        // 1. initial task array
    init(task, onRemove) {
        for(let i = 0; i < tasks.length; i++) {
            taskList.add(tasks[i]);
        }
        taskList.onRemove = onRemove;
    },
    add(task) {
        const dom = makeTask(task);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');
    
        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
        });
    
            // append to <ul>, this will empty the fragment
        list.appendChild(dom);
    }
};
    
export default taskList;
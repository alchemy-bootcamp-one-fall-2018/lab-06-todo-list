function makeToDo(todo) {
    const html = /*html*/`
        <li class="to-do">
            <h3 class="title">
                ${todo.title}
            </h3>
            <h4 class=${new Date(todo.date) > Date.now() ? 'date' : 'late'}> ${todo.date}</h4>
            <button class="btn-remove">X</button>
        </li>
    `;
    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('todo');

const todoList = {
    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeToDo(todo);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });

        list.appendChild(dom);
    }
};

export default todoList;